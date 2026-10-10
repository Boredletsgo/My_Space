import { Loader2, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { site } from '@/data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const formspreeId = import.meta.env.VITE_FORMSPREE_ID ?? site.formspreeId

const inputClass =
  'w-full rounded-2xl border-2 border-ink bg-surface px-4 py-3 text-sm font-medium text-ink outline-none transition-shadow placeholder:text-muted focus:shadow-hard'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Without a Formspree id there is no backend, so hand off to the user's
    // mail client instead of silently dropping the message.
    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
      const body = encodeURIComponent(
        `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`,
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Say hello"
      title="A good conversation is a fine place to start."
      description="Reach out about AI engineering, a collaboration, something I wrote, or simply an idea you want to exchange."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.35fr]">
        <div className="space-y-5">
          <Card tone="cobalt">
            <a href={`mailto:${site.email}`} className="block">
              <Mail className="size-6" />
              <p className="mt-4 text-xs font-bold tracking-[0.18em] uppercase opacity-80">
                Email
              </p>
              <p className="mt-1 text-sm font-bold break-all">{site.email}</p>
            </a>
          </Card>

          <Card tone="sun">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block">
              <Phone className="size-6" />
              <p className="mt-4 text-xs font-bold tracking-[0.18em] uppercase opacity-70">
                Phone
              </p>
              <p className="mt-1 text-sm font-bold">{site.phone}</p>
            </a>
          </Card>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold tracking-[0.14em] uppercase">
                  Name
                </span>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold tracking-[0.14em] uppercase">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-bold tracking-[0.14em] uppercase">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What would you like to build?"
                className={`${inputClass} resize-y`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>

              {status === 'sent' && (
                <p className="border-ink bg-sun-400 rounded-full border-2 px-4 py-1.5 text-sm font-bold">
                  Thanks — I'll be in touch.
                </p>
              )}
              {status === 'error' && (
                <p className="border-ink bg-coral-500 rounded-full border-2 px-4 py-1.5 text-sm font-bold text-white">
                  Something went wrong. Email me directly.
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </Section>
  )
}
