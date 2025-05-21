"use client"
import { Code, Layers, Palette, Sparkles, Zap, Shield } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"

import {
  ShoppingCart,
  Truck,
  ShieldCheck,
  CreditCard,
  Package,
  Star,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-pink-500" />,
      title: "Seamless Shopping",
      description:
        "Smooth product browsing, filtering, and one-click add-to-cart functionality for effortless shopping.",
      progress: 100,
      borderClass: "border-glow-pink",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-indigo-500" />,
      title: "Secure Payments",
      description:
        "Multiple secure payment options including UPI, cards, and wallets with end-to-end encryption.",
      progress: 95,
      borderClass: "border-glow-indigo",
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-500" />,
      title: "Fast Delivery",
      description:
        "Quick and trackable delivery options with real-time status updates for every order.",
      progress: 90,
      borderClass: "border-glow-blue",
    },
    {
      icon: <Package className="h-10 w-10 text-yellow-500" />,
      title: "Easy Returns",
      description:
        "No-hassle return policy with instant pickup scheduling and instant refunds.",
      progress: 85,
      borderClass: "border-glow-yellow",
    },
    {
      icon: <Star className="h-10 w-10 text-purple-500" />,
      title: "Top Rated Products",
      description:
        "Customer-rated products with verified reviews and quality assurance badges.",
      progress: 88,
      borderClass: "border-glow-purple",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
      title: "Buyer Protection",
      description:
        "Every purchase is backed by our buyer protection policy for safe and trusted transactions.",
      progress: 100,
      borderClass: "border-glow-green",
    },
  ];

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Powerful Features for Modern Web Development"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Our component library provides everything you need to build beautiful, interactive, and accessible web applications."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  <Card
                    className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                  >
                    <CardHeader>
                      <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="mt-4 tracking-tight relative">
                        {feature.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        {feature.description}
                      </CardDescription>

                      <ProgressCard
                        title=""
                        progress={feature.progress}
                        total={100}
                        status={feature.progress === 100 ? "success" : "default"}
                        showPercentage
                        variant="minimal"
                        progressColor={feature.progress === 100 ? "bg-green-500" : "bg-red-500"}
                      />
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  )
}
