import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { nome, email, telefone, mensagem } = await request.json()

    // Configura o transporte de email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Envia o email
    await transporter.sendMail({
      from: `"Portfólio - ${nome}" <${process.env.EMAIL_USER}>`,
      to: "simonettmelissa13@gmail.com", // destino da mensagem
      subject: `Nova mensagem de ${nome}`,
      text: `
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ success: false, error: "Erro ao enviar email" }, { status: 500 })
  }
}
