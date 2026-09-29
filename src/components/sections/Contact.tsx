import { Loader2, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { site } from '@/data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const formspreeId = import.meta.env.VITE_FORMSPREE_ID ?? site.formspreeId

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white'

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
      eyebrow="Contact"
      title="Let's build something"
      description="Open to AI engineering roles, agentic system design, and collaborations."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
        <Card className="h-fit">
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Reach me</h3>
          <div className="mt-5 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-3 text-sm text-slate-600 transition-colors dark:text-slate-400"
            >
              <Mail className="size-4 shrink-0" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-3 text-sm text-slate-600 transition-colors dark:text-slate-400"
            >
              <Phone className="size-4 shrink-0" /> {site.phone}
            </a>
          </div>
        </Card>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Email</span>
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
              <span className="mb-1.5 block text-sm font-medium">Message</span>
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
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Thanks — I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </Section>
  )
}
