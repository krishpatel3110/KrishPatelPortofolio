import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/context/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const contactInfo = [
    { icon: Mail, label: t("contact_info_email"), value: "patelkrishh3110@gmail.com", href: "mailto:patelkrishh3110@gmail.com" },
    { icon: Phone, label: t("contact_info_phone"), value: "+1 (205) 440-0372", href: "tel:+12054400372" },
    { icon: MapPin, label: t("contact_info_location"), value: "New Jersey, USA", href: "#" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS configuration is missing.");
      await emailjs.send(serviceId, templateId, { name: formData.name, email: formData.email, message: formData.message }, publicKey);
      setSubmitStatus({ type: "success", message: t("contact_success") });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: error.text || t("contact_error") });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 border-b border-border pb-6 animate-fade-in">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{t("contact_label")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("contact_title")} <span className="font-serif italic font-normal text-foreground/60">{t("contact_title_italic")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <form className="space-y-6 animate-fade-in animation-delay-100" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t("contact_name")}</label>
              <input
                type="text" required placeholder={t("contact_name_ph")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t("contact_email")}</label>
              <input
                type="email" required placeholder={t("contact_email_ph")}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t("contact_message")}</label>
              <textarea
                rows={5} required placeholder={t("contact_message_ph")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
              {isLoading ? t("contact_sending") : <><Send className="w-5 h-5" /> {t("contact_send")}</>}
            </Button>
            {submitStatus.type && (
              <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-600" : "bg-red-500/10 border border-red-500/20 text-red-600"}`}>
                {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
          </form>

          {/* Info */}
          <div className="space-y-8 animate-fade-in animation-delay-200">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-4 py-4 border-b border-border hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-6 rounded-2xl border border-border bg-secondary/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-foreground">{t("contact_available")}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("contact_available_desc")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};