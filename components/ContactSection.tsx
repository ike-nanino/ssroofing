
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Contact Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold uppercase mb-2">Address</h3>
            <p>Eisen & Co Legal Practitioners</p>
            <p>3rd Dade Link, Cantonments Accra</p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase mb-2">Phone</h3>
            <a href="tel:+233504375771">+233 504 375 771</a>
        
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase mb-2">Email</h3>
            <p>info@legalecho.org</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-white'>
                <Input name="name" value={formData.name} onChange={handleChange} type='text' placeholder='Name' required />
                <Input name="subject" value={formData.subject} onChange={handleChange} type='text' placeholder='Subject' required />
                <Input name="email" value={formData.email} onChange={handleChange} type='email' placeholder='Email Address' required />
                <Input name="phone" value={formData.phone} onChange={handleChange} type='text' placeholder='Phone Number' />
              </div>

              <Textarea name="message" value={formData.message} onChange={handleChange} className='h-[200px] text-white' placeholder='Type your message here' required />

              <Button type='submit' className='max-w-32' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {success && <p className="text-green-500">Your message has been sent successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
      </div>
    </section>
  )
}

export default ContactSection