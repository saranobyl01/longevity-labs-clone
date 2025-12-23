import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What quality testing do you provide?",
    answer: "Every batch undergoes comprehensive testing including HPLC for purity verification, LC-MS for molecular confirmation, sterility testing, endotoxin testing, and chemical contaminant screening. All products are accompanied by certificates of analysis from independent, certified laboratories.",
  },
  {
    question: "How do I read your Certificates of Analysis?",
    answer: "Our Certificates of Analysis (COA) include purity percentage, molecular weight confirmation, batch number, testing date, and results from all analytical methods performed. Contact our support team if you need assistance interpreting any results.",
  },
  {
    question: "Do you test for endotoxin contamination?",
    answer: "Yes, all our peptides undergo endotoxin testing to ensure research-grade quality and safety for in vitro applications. Results are included in our certificates of analysis.",
  },
  {
    question: "What purity level do I need?",
    answer: "For most research applications, our standard 99%+ purity peptides are suitable. Specific applications may have different requirements - contact our team for guidance on your particular research needs.",
  },
  {
    question: "How should I store unopened peptides?",
    answer: "Unopened lyophilized peptides should be stored at -20°C for long-term storage or 2-8°C for short-term storage. Keep away from light and moisture. Proper storage can maintain stability for 12-24 months.",
  },
  {
    question: "How long do reconstituted peptides last?",
    answer: "Reconstituted peptides should be stored at 2-8°C and used within 2-4 weeks. For longer storage, aliquot and freeze at -20°C. Avoid repeated freeze-thaw cycles.",
  },
  {
    question: "What are your shipping times?",
    answer: "Orders placed before 12 PM PT ship the same day. Standard domestic shipping typically takes 2-5 business days. Expedited options are available at checkout.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we offer fast global shipping to most countries. International shipping times vary by destination. Check our shipping policy for specific details about your country.",
  },
  {
    question: "What sizes are available?",
    answer: "Peptides are available in various sizes ranging from small research quantities to bulk orders. Visit individual product pages for specific size options and pricing.",
  },
  {
    question: "Are research peptides legal to purchase?",
    answer: "Research peptides are legal to purchase for legitimate research and development purposes. They are not intended for human consumption and should only be used in laboratory settings.",
  },
  {
    question: 'Why do products say "not for human consumption"?',
    answer: "Our products are manufactured and sold exclusively for research and development purposes. This labeling is required to indicate that these compounds have not been evaluated or approved for human therapeutic use.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns on unopened products within 30 days of delivery. Opened or used products cannot be returned. Contact our support team to initiate a return.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team via the contact form on our website, through live chat, or by emailing us directly. We typically respond within 24 business hours.",
  },
  {
    question: "What if my order doesn't arrive?",
    answer: "If your order hasn't arrived within the expected timeframe, contact our support team with your order number. We'll investigate and resolve the issue, including reshipping if necessary.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10 p-6 bg-card rounded-xl border border-border">
            <p className="text-muted-foreground mb-4">
              Still have questions? Our team is ready to help.
            </p>
            <Button variant="shop">Contact our team</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
