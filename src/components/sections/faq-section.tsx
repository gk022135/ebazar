"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "What is e-BAZAR?",
      answer:
        "e-BAZAR is an online marketplace offering premium, sustainable, and affordable products across various categories, including luxury items, daily essentials, and groceries.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery usually takes 3–5 business days. Express and same-day delivery options are also available depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 7-day easy return window for most products. Items must be unused and in original packaging to qualify for a full refund or exchange.",
    },
    {
      question: "Are your products eco-friendly?",
      answer:
        "Yes, we prioritize sustainable sourcing and eco-friendly packaging for all our products, ensuring minimal environmental impact.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-standard encryption and secure payment gateways to protect your data and transactions.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Find answers to your common shopping questions at e-BAZAR.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glassmorphic-accordion-item"
                >
                  <AccordionTrigger className="text-left font-medium tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
