import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Here you would typically integrate with your email service
    // For example, using nodemailer, SendGrid, or any other email service
    console.log('Received contact form submission:', { name, email, message })

    // For now, we'll just simulate a successful response
    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
