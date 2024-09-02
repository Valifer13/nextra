import mailIcon from "../../../assets/icons/mail.svg";
import locationIcon from "../../../assets/icons/location_on.svg";
import callIcon from "../../../assets/icons/call.svg";

const contacts = [
  {
    name: "Email",
    icon: mailIcon,
    description: "Send us an email",
    address: "nextra@example.com",
  },
  {
    name: "Phone Number",
    icon: callIcon,
    description: "Call us now",
    address: "+XX XXX-XXXX-XXXX",
  },
  {
    name: "Office Location",
    icon: locationIcon,
    description: "Go and meet us on our office",
    address: "Show Direction",
  },
];

const AddressContact = ({ items }) => {
  return (
    <div className="grid grid-flow-row gap-2">
      <img src={items.icon} alt={items.name} width={40} height={40} />
      <h2 className="text-2xl font-poppins">{items.name}</h2>
      <p>{items.description}</p>
      <p>{items.address}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 h-full">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-start">
        Contact Information
      </h1>
      <p className="font-poppins text-[#777] text-center md:text-start">
        We’re always here to help. Reach us for any problem.
      </p>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-5 md:gap-0 mt-10">
        <div className="grid gap-2">
          {contacts.map((items, index) => (
            <AddressContact key={index} items={items} />
          ))}
        </div>
        <div className="w-full md:col-span-2">
          <iframe
            title="Bali Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010292.8370280771!2d114.41205106151213!3d-8.454919324786227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e0!3m2!1sid!2sid!4v1724995259137!5m2!1sid!2sid"
            className="w-full h-[20rem] md:h-[32rem]"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
