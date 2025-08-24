import type { ActionFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - Alejandro Duque - CTO/Developer" },
    { name: "description", content: "Reach out to discuss your project or ideas. I'm here to provide support and turn your vision into reality." },
  ];
};

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate form data
  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  try {
    // Get API key from environment
    const apiKey = (context.env as any)?.RESEND_API_KEY || process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      throw new Error('RESEND_API_KEY not found');
    }
    
    // Send email using Resend API directly with fetch
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'ducode@outlook.com',
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #20D7FF; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              This message was sent from the contact form on your website.
            </p>
          </div>
        `,
        reply_to: email
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return { error: "Failed to send message. Please try again later." };
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);
    return { success: "Thank you for your message! I'll get back to you soon." };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: "Failed to send message. Please try again later." };
  }
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-500 text-white flex items-center justify-center p-5">
      <div className="bg-black/85 rounded-[18px] border border-white/15 w-full max-w-[1400px] h-[900px] relative overflow-hidden">
        {/* Header */}
        <header className="bg-black/20 border-b border-white/10 rounded-t-4 px-5 py-[18px] flex items-center justify-between relative">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="w-3 h-3 bg-white/15 rounded-full"></div>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-sm text-white/30 whitespace-nowrap">
            Alejandro Duque
          </div>
        </header>

        {/* Main Content */}
        <div className="flex h-[calc(100%-73px)]">
          {/* Side Menu */}
          <aside className="bg-black/20 border-r border-white/10 w-[336px] px-8 py-12 flex flex-col relative">
            {/* Profile Section */}
            <div className="mb-10 relative">
              <a href="/" className="block">
                <div className="bg-white/5 border border-white/5 rounded-full p-1.5 w-12 h-12 mb-4 relative">
                  <div className="w-full h-full bg-cover bg-center rounded-full" style={{ backgroundImage: "url('/images/main.png')" }}></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <div className="mb-10">
                  <div className="font-medium text-sm text-white mb-1">Alejandro Duque</div>
                  <div className="font-medium text-sm text-white/50">CTO/Developer</div>
                </div>
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 flex flex-col gap-5 mb-10">
              <a href="/about" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">About</span>
              </a>

              <a href="/portfolio" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">Portfolio</span>
              </a>

              <a href="/services" className="px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/5">
                <span className="font-medium text-sm text-white">Services</span>
              </a>

              <div className="px-3.5 py-2.5 rounded-lg bg-white/10 flex items-center gap-2.5">
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <span className="font-medium text-sm text-cyan-400">Contact</span>
              </div>
            </nav>

            {/* Book Call Button */}
            <div className="relative">
              <a
                href="https://calendar.notion.so/meet/alejandroduque/kmel84oty"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/10 border border-white/5 rounded-[10px] px-4 py-3 w-full cursor-pointer transition-colors hover:bg-white/15 no-underline"
              >
                <div className="font-medium text-sm text-white/65 text-center">Book a Call</div>
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 flex flex-col overflow-y-auto max-h-full bg-transparent">
            {/* Intro Section */}
            <section className="bg-cyan-400/3 border-b border-white/10 px-12 pt-14 pb-12 relative">
              <div className="flex justify-between items-center gap-12">
                <div className="flex-1 max-w-[400px]">
                  <div className="bg-cyan-400/5 border border-cyan-400/20 rounded-full px-2.5 py-2 text-xs font-medium text-cyan-400 w-fit mb-4">
                    Contact
                  </div>
                  <h1 className="font-medium text-[32px] leading-tight text-white tracking-tight mb-3">
                    Let&apos;s Connect and Collaborate
                  </h1>
                  <p className="font-medium text-sm leading-tight text-white/50 max-w-[360px]">
                    Reach out to discuss your project or ideas. I&apos;m here to provide support and turn your vision into reality.
                  </p>
                </div>
                <div className="flex items-center gap-0">
                  <div className="bg-cyan-400 border border-cyan-400/10 rounded-full p-8 w-28 h-28 flex items-center justify-center relative z-[3] -mr-7">
                    <div className="text-2xl">📧</div>
                  </div>
                  <div className="bg-cyan-400/35 border border-cyan-400/10 rounded-full p-8 w-28 h-28 flex items-center justify-center relative z-[2] -mr-7 backdrop-blur-[50px]">
                    <div className="text-2xl">💬</div>
                  </div>
                  <div className="bg-cyan-400/10 border border-cyan-400/10 rounded-full p-8 w-28 h-28 flex items-center justify-center relative z-[1] backdrop-blur-[50px]">
                    <div className="text-2xl">🤝</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Content Section */}
            <section className="px-12 py-10">
              <div className="flex gap-3 items-start">
                {/* Contact Form */}
                <div className="flex-1 bg-cyan-400/5 border border-cyan-400/5 rounded-xl p-8 relative overflow-hidden">
                  <div className="mb-8">
                    <h2 className="font-medium text-2xl leading-tight text-white mb-3">📤 Get In Touch</h2>
                    <p className="font-medium text-sm leading-tight text-white/50 max-w-[360px]">
                      Have a question or want to start a project? Contact me, and let&apos;s make your ideas come to life!
                    </p>
                  </div>
                  {actionData?.error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm">{actionData.error}</p>
                    </div>
                  )}
                  {actionData?.success && (
                    <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-green-400 text-sm">{actionData.success}</p>
                    </div>
                  )}
                  <Form method="post" className="space-y-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-cyan-400/5 border border-cyan-400/10 rounded-lg px-5 py-4 w-full font-medium text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/30"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="bg-cyan-400/5 border border-cyan-400/10 rounded-lg px-5 py-4 w-full font-medium text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/30"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="How can I help you?"
                        required
                        rows={6}
                        className="bg-cyan-400/5 border border-cyan-400/10 rounded-lg px-5 py-4 w-full font-medium text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/30 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-cyan-400/20 border border-cyan-400/10 rounded-lg px-4 py-4 w-full font-medium text-sm text-cyan-400 cursor-pointer transition-colors hover:bg-cyan-400/35"
                    >
                      Send a Message
                    </button>
                  </Form>
                </div>

                {/* Socials & Book a Call Sidebar */}
                <div className="flex-1 flex flex-col gap-3">
                  {/* Social Media */}
                  <div className="bg-cyan-400/5 border border-cyan-400/5 rounded-xl p-8 relative overflow-hidden">
                    <h3 className="font-medium text-xl leading-tight text-white mb-5">🔹 Follow Me</h3>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        {
                          name: "LinkedIn",
                          url: "https://www.linkedin.com/in/aleducode/",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0747 26.4167H4.92658C3.49473 26.4167 2.33398 25.2559 2.33398 23.8241V5.67594C2.33398 4.24409 3.49473 3.08334 4.92658 3.08334H23.0747C24.5066 3.08334 25.6673 4.24409 25.6673 5.67594V23.8241C25.6673 25.2559 24.5066 26.4167 23.0747 26.4167ZM18.8113 22.9167H22.1673V16.0225C22.1673 13.1055 20.5138 11.6951 18.2041 11.6951C15.8934 11.6951 14.921 13.4945 14.921 13.4945V12.0278H11.6868V22.9167H14.921V17.2007C14.921 15.6691 15.626 14.7577 16.9754 14.7577C18.2158 14.7577 18.8113 15.6335 18.8113 17.2007V22.9167ZM5.83398 8.59266C5.83398 9.70227 6.72668 10.602 7.82833 10.602C8.92998 10.602 9.82215 9.70227 9.82215 8.59266C9.82215 7.48305 8.92998 6.58334 7.82833 6.58334C6.72668 6.58334 5.83398 7.48305 5.83398 8.59266ZM9.53078 22.9167H6.15831V12.0278H9.53078V22.9167Z" fill="#20D7FF" />
                            </svg>
                          )
                        },
                        {
                          name: "Twitter",
                          url: "https://x.com/aleducode",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                              <path d="M20.769 4.25H24.3455L16.4926 13.1614L25.6673 25.25H18.4675L12.8305 17.9039L6.37708 25.25H2.8005L11.1199 15.7186L2.33398 4.25H9.71264L14.8054 10.9607L20.769 4.25ZM19.5171 23.1577H21.4998L8.67076 6.26476H6.54036L19.5171 23.1577Z" fill="#20D7FF" />
                            </svg>
                          )
                        },
                        {
                          name: "Github",
                          url: "https://github.com/aleducode",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" fill="#20D7FF" />
                            </svg>
                          )
                        },
                        {
                          name: "Instagram",
                          url: "https://www.instagram.com/aleducode/",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                              <path d="M9.67472 3.75C6.28533 3.75 3.5 6.53161 3.5 9.92472V18.5753C3.5 21.9647 6.28161 24.75 9.67472 24.75H18.3253C21.7147 24.75 24.5 21.9684 24.5 18.5753V9.92472C24.5 6.53533 21.7184 3.75 18.3253 3.75H9.67472ZM9.67472 5.65909H18.3253C20.6855 5.65909 22.5909 7.56445 22.5909 9.92472V18.5753C22.5909 20.9355 20.6855 22.8409 18.3253 22.8409H9.67472C7.31445 22.8409 5.40909 20.9355 5.40909 18.5753V9.92472C5.40909 7.56445 7.31445 5.65909 9.67472 5.65909ZM19.6378 7.74716C19.1568 7.74716 18.7727 8.13121 18.7727 8.61222C18.7727 9.09322 19.1568 9.47727 19.6378 9.47727C20.1188 9.47727 20.5028 9.09322 20.5028 8.61222C20.5028 8.13121 20.1188 7.74716 19.6378 7.74716ZM14 8.52273C10.8493 8.52273 8.27273 11.0993 8.27273 14.25C8.27273 17.4007 10.8493 19.9773 14 19.9773C17.1507 19.9773 19.7273 17.4007 19.7273 14.25C19.7273 11.0993 17.1507 8.52273 14 8.52273ZM14 10.4318C16.1216 10.4318 17.8182 12.1284 17.8182 14.25C17.8182 16.3716 16.1216 18.0682 14 18.0682C11.8784 18.0682 10.1818 16.3716 10.1818 14.25C10.1818 12.1284 11.8784 10.4318 14 10.4318Z" fill="#20D7FF" />
                            </svg>
                          )
                        }
                      ].map((social) => (
                        <a 
                          key={social.name} 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-cyan-400/5 border border-cyan-400/5 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:bg-cyan-400/10 transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Book a Call */}
                  <div className="bg-cyan-400/10 border border-cyan-400/10 rounded-xl p-8 relative overflow-hidden w-[450px]">
                    <div className="absolute -bottom-6 -right-4 bg-cyan-400/5 border border-cyan-400/5 rounded-full p-12 w-14 h-14 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-xl leading-tight text-white mb-2">🦋 Book a Call</h3>
                    <p className="font-medium text-sm leading-tight text-white/50 mb-6 max-w-[240px]">
                      Have a question or want to start a project? Contact me, and let&apos;s make your ideas come to life!
                    </p>
                    <a
                      href="https://calendar.notion.so/meet/alejandroduque/kmel84oty"
                      target="_blank"
                      rel="noreferrer"
                      className="block bg-white/10 border border-white/5 rounded-lg px-4 py-3 w-full cursor-pointer transition-colors hover:bg-white/15 no-underline"
                    >
                      <div className="font-medium text-sm text-white/65 text-center">Book a Call</div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/20 border-t border-white/10 px-12 py-6 flex justify-between items-center mt-auto">
              <div className="font-medium text-xs text-white/30">© 2024, All Rights Reserved</div>
              <div className="font-medium text-xs text-white/30">Licenses</div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}