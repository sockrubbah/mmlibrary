import { useState } from "react";

export default function ContactForm({ dialogRef }) {
    const [result, setResult] = useState("");
    const [sending, setSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "92a5743c-c634-450d-ae8a-61017c85c35a");

        setSending(true);
        setResult("Sending...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setResult("Thanks! Your message was sent successfully!");
                form.reset();
            } else {
                setResult("Error: your message could not be sent.");
            }
        } catch (error) {
            setResult("Could not send your message. Please try again.");
        } finally {
            setSending(false);
        }

        setTimeout(() => {
            setResult("");
        }, 3000);
    };

    return (
        <dialog id="contact-modal" ref={dialogRef} aria-labelledby="contact-title">
            <button id="close-contact" type="button" aria-label="Close contact form" onClick={() => dialogRef.current.close()}>
                ×
            </button>
            <h2 id="contact-title">Contact Music Multiverse</h2>
            <form id="contact-form" onSubmit={onSubmit}>
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" type="text" name="name" required/>
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" name="email" required/>
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" required />
                <button type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                </button>
                <p id="form-feedback" className="form-feedback" role="status">
                    {result}
                </p>
            </form>
        </dialog>
    );
}