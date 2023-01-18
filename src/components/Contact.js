import React from "react";

function Contact(props) {
  return (
    <form class="form" action="/action_page.php" method="get">
      <h4>
        <span class="red">Conta</span>
        <span class="white">ctfor</span>
        <span class="blue">mulier</span>
      </h4>
      <p>
        Met deze gegevens kan de politie contact met u opnemen voor verdere
        vragen of terugkoppeling.
      </p>
      <p class="bet">
        Betreft<span>*</span>
      </p>
      <div class="betreft">
        <label htmlFor="radio">Nieuwe bericht</label>
        <input type="radio" name="betreft" required /> <br />
        <label htmlFor="radio">Aanvulling op eerder ingediende bericht</label>
        <input type="radio" name="betreft" required />
      </div>
      <input type="text" placeholder="Volledige naam" required />
      <input type="email" placeholder="E-mailadres" required />{" "}
      <input type="text" placeholder="Adres" required />
      <input type="tel" placeholder="Telefoonnummer" required /> <br />
      <p class="keuze">Maak een keuze.</p>
      <select name="role" id="role">
        <optgroup id="current" label="Select one">
          <option value="Lorem ">Lorem ipsum 1</option>
          <option value="Lorem ">Lorem ipsum 2</option>
          <option value="Lorem ">Lorem ipsum 3</option>
          <option value="Lorem ">Lorem ipsum 4</option>{" "}
          <option value="Lorem ">Lorem ipsum 5</option>
          <option value="other">Other</option>
        </optgroup>
      </select>{" "}
      <br></br>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="8"
        placeholder="Mijn Bericht..."
      ></textarea>
      <button class="submit">Send Message</button>
    </form>
  );
}

export default Contact;
