/*const slider = document.getElementById("qualitySlider");
const output = document.getElementById("sliderValue");

const minRes = 64;
const maxRes = 1024;
const steps = 20;

function updateSliderValue(value) {
  const resolution = Math.round(
    minRes + ((value - 1) * (maxRes - minRes)) / steps
  );
  output.textContent = `${resolution} x ${resolution} px`;

  const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
  output.style.left = `calc(${percent}% )`;
  output.style.transform = "translateX(-50%)";

  slider.style.background = `linear-gradient(to right, #3399ff 0%, #3399ff ${percent}%, #cce5ff ${percent}%, #cce5ff 100%)`;
}

slider.addEventListener("input", function () {
  updateSliderValue(this.value);
});

updateSliderValue(slider.value);
*/
const minRes = 64;
const maxRes = 1024;
const steps = 20;

function updateSliderValue(value) {
  const resolution = Math.round(
    minRes + ((value - 1) * (maxRes - minRes)) / steps
  );
  $("#sliderValue").text(`${resolution} x ${resolution} px`);

  const slider = $("#qualitySlider");
  const min = parseInt(slider.attr("min"));
  const max = parseInt(slider.attr("max"));
  const percent = ((value - min) / (max - min)) * 100;

  $("#sliderValue").css({
    left: `calc(${percent}% )`,
    transform: "translateX(-50%)",
  });

  slider.css(
    "background",
    `linear-gradient(to right, #3399ff 0%, #3399ff ${percent}%, #cce5ff ${percent}%, #cce5ff 100%)`
  );
  console.log($("#sliderValue"));
}

$(document).ready(function () {
  const slider = $("#qualitySlider");

  slider.on("input", function () {
    updateSliderValue(parseInt($(this).val()));
  });

  updateSliderValue(parseInt(slider.val()));
});

/* url*/

const items = document.querySelectorAll(".sabothammuu");
const contentMore = document.querySelectorAll(".contentier-onemore");
const listDiv = document.getElementById("contentierList");
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

contentMore.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="content">
        <p class="content-write">URL</p>
        <input class="content-input"  type="text" placeholder="https://dingdong.io/"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelectorAll(".content-input");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          const aceImg = document.querySelector(".ace-images");
          if (aceImg) aceImg.src = "img/qr to.png";
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your URL !";
          } else {
            errorDiv.textContent = "";
            const aceImg = document.querySelector(".ace-images");
            if (aceImg) aceImg.src = "/img/qr to đen.png";
          }
        }
      });
    });
    console.log(items);
    console.log(errorDiv);
  });
});

/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");

  $(".sabothammuu, .contentier-onemore").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
  });

  $(".sabothammuu").click(function () {
    $listDiv.html(`
      <div class="content">
        <p class="content-write">URL</p>
        <input class="content-input" type="text" placeholder="https://dingdong.io/"/>
        <div class="error-input input-error"></div>
      </div>
    `);

    $(".content-input").on("keydown", function (event) {
      if (event.key === "Enter") {
        const $input = $(this);
        const value = $input.val().trim();
        const $errorDiv = $input.siblings(".error-input");
        const $aceImg = $(".ace-images");

        if ($aceImg.length) {
          $aceImg.attr("src", "img/qr to.png");
        }

        if (value === "") {
          event.preventDefault();
          $errorDiv.text("Please enter your URL !");
        } else {
          $errorDiv.text("");
          if ($aceImg.length) {
            $aceImg.attr("src", "/img/qr to đen.png");
          }
        }
      }
    });
  });
});
*/
/* fb*/
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".acehoaquyen").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();

    $(".acehoaquyen").click(function () {
      $listDiv.html(`
       <div class="contentiton">
        <p class="content-write"> Your Facebook URL</p>
        <input class="content-input" type="text" placeholder="https://Facebook.com/"/>
        <div class="error-input input-error"></div>
      </div>

      `);
      $(".content-input").on("keydown", function (event) {
        if (event.key === "Enter") {
          const $input = $(this);
          const value = $input.val().trim();
          const $errorDiv = $input.siblings(".error-input");
          const $aceImg = $(".ace-images");

          if ($aceImg.length) {
            $aceImg.attr("src", "img/qr to.png");
          }

          if (value === "") {
            event.preventDefault();
            $errorDiv.text("Please enter your Facebook !");
          } else {
            $errorDiv.text("");
            if ($aceImg.length) {
              $aceImg.attr("src", "/img/qr to đen.png");
            }
          }
        }
      });
    });
  });
});
*/

const aechoaquyen = document.querySelectorAll(".acehoaquyen");

aechoaquyen.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aechoaquyen.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="contentiton">
        <p class="content-write"> Your Facebook URL</p>
        <input class="content-input" type="text" placeholder="https://Facebook.com/"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelectorAll(".content-input");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your Facebook !";
            const aceImg = document.querySelector(".ace-images");
            if (aceImg) aceImg.src = "img/qr to.png";
          } else {
            errorDiv.textContent = "";
            const aceImg = document.querySelector(".ace-images");
            if (aceImg) aceImg.src = "/img/qr to đen.png";
          }
          return;
        }
      });
    });
  });
  console.log(aechoaquyen);
});

/* text */
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".aecfiveText").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".aecfiveText").click(function () {
      $listDiv.html(`
        <div class="content">
    <p class="content-write"> Your text URL</p>
    <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
    <p class="content-aceptexxt"> Line breaks are allowed</p>
    </div>

        `);
    });
  });
});
*/

const aecfiveText = document.querySelectorAll(".aecfiveText");
aecfiveText.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aecfiveText.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
    <div class="content">
    <p class="content-write"> Your text URL</p>
    <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
    <p class="content-aceptexxt"> Line breaks are allowed</p>
    </div>
    `;
  });
  console.log(aecfiveText);
});

/* email */
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".aeconeEmail").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".aeconeEmail").click(function () {
      $listDiv.html(`
      <div class="content">
       <p class="content-pier">Your Email</p>
        <input class="content-className" type="text" placeholder="dhfakf@outlook.com"/>
        <div class="error-input input-error"></div>
        <p class="content-pier">Subject</p>
        <input class="content-classfive" type="text" placeholder="enter your subject"/>
        <div class="error-butinput"></div>
       <p class="content-write"> Your Facebook URL</p>
        <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
        <p class="content-aceptexxt"> Line breaks are allowed</p>
      </div>

        `);
      $(".content-className, .content-classfive").on(
        "keydown",
        function (event) {
          if (event.key === "Enter") {
            const $input = $(this);
            const value = $input.val().trim();
            const $parent = $input.parent();

            const $errorDiv = $parent.find(".error-input");
            const $errorButin = $parent.find(".error-butinput");

            if (value === "") {
              event.preventDefault();
              $errorDiv.text("Please enter your email!");
              $errorButin.text("Please enter subject!");
            } else {
              $errorDiv.text("");
              $errorButin.text("");
            }
          }
        }
      );
    });
  });
});
*/
const aeconeEmail = document.querySelectorAll(".aeconeEmail");

aeconeEmail.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aeconeEmail.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="content">
       <p class="content-pier">Your Email</p>
        <input class="content-className" type="text" placeholder="dhfakf@outlook.com"/>
        <div class="error-input input-error"></div>
        <p class="content-pier">Subject</p>
        <input class="content-classfive" type="text" placeholder="enter your subject"/>
        <div class="error-butinput"></div>
       <p class="content-write"> Your Facebook URL</p>
        <textarea class="content-inputertion" type="text" placeholder="Enter your text here..."></textarea>
        <p class="content-aceptexxt"> Line breaks are allowed</p>
      </div>
    `;
    const inputs = document.querySelectorAll(
      ".content-className,.content-classfive"
    );
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          const errorbutin =
            input.parentElement.querySelector(".error-butinput");

          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your email!";
            errorbutin.textContent = "Please enter subject!";
          } else {
            errorDiv.textContent = "";
            errorbutin.textContent = "";
          }
        }
      });
    });
  });
  console.log(aeconeEmail);
});

/* iphone*/
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".aceonephone").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("divplay") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".aceonephone").click(function () {
      $listDiv.html(`
        <div class="content">
        <p class="content-write">Your phone number</p>
        <input class="content-input" type="number" placeholder="03942346934"/>
        <div class="error-input input-error"></div>
        </div>
        `);

      $(".content-input").on("keydown", function (event) {
        if (event.key === "Enter") {
          const input = $(this);
          const value = input.val().trim();
          const errorDiv = input.parent().find(".error-input");

          if (value === "") {
            event.preventDefault();
            errorDiv.text("Please enter your phone!");
          } else {
            errorDiv.text("");
          }
        }
      });
    });
  });
});
*/

const aceonephone = document.querySelectorAll(".aceonephone");

aceonephone.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aceonephone.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="content">
        <p class="content-write">Your phone number</p>
        <input class="content-input" type="number" placeholder="03942346934"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelectorAll(".content-input");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your phone!";
          } else {
            errorDiv.textContent = "";
          }
        }
      });
    });
  });
  console.log(aceonephone);
});

/*location*/
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".locationcontent").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".locationcontent").click(function () {
      $listDiv.html(`
     <div class="content">
      <div class="section-luffy">
       <p class="sectionluffy-write">information
       How to get latitude & longitude of a location from Google Maps?</p>
      </div>
      <div class="section-more">
      <div class="sectionnis-one">
       <p class="sectionnis-write"> Latitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
      <div class="sectionnis-one">
       <p class="sectionnis-write">
         Longitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
     </div>
     <div class="section-moretime">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m2!2m1!1zYmFuaMO0IGNow6FuaCB0aMOqIHRo4bqldCBnaWFwIHRyw6pu!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
     </iframe>
     </div>
    </div>
     `);
      $(".classfontinput").on("keydown", function (event) {
        if (event.key === "Enter") {
          const input = $(this);
          const value = input.val().trim();
          const errorDiv = input.parent().find(".inputcontentnersion");

          if (value === "") {
            event.preventDefault();
            errorDiv.text("Please enter your!");
          } else {
            errorDiv.text("");
          }
        }
      });
    });
  });
});
*/

const locationcontent = document.querySelectorAll(".locationcontent");
locationcontent.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
  });
});
locationcontent.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
    <div class="content">
     <div class="section-luffy">
       <p class="sectionluffy-write">information
       How to get latitude & longitude of a location from Google Maps?</p>
     </div>
     <div class="section-more">
      <div class="sectionnis-one">
       <p class="sectionnis-write"> Latitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
      <div class="sectionnis-one">
       <p class="sectionnis-write">
Longitude</p>
       <input class="content-classfontinput classfontinput" type="text" placeholder="enter your subject"/>
        <div class="error-input inputcontentnersion"></div>
      </div>
     </div>
     <div class="section-moretime">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m2!2m1!1zYmFuaMO0IGNow6FuaCB0aMOqIHRo4bqldCBnaWFwIHRyw6pu!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
     </iframe>
     </div>
    </div>

    `;
    const inputs = document.querySelectorAll(".classfontinput");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const inputcontentnersion = input.parentElement.querySelector(
            ".inputcontentnersion"
          );
          if (value === "") {
            event.preventDefault();
            inputcontentnersion.textContent = "plaese your enter!";
          } else {
            inputcontentnersion.textContent = "";
          }
        }
      });
    });
  });
});

/* wifi */
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".aceoneWifi").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".aceoneWifi").click(function () {
      $listDiv.html(`
     <div class="contention">
      <div class="content-nice">
        <p class="content-write">Wireless SSID</p>
        <input class="content-input oversuper" type="text" placeholder="Enter your wireless SSID"/>
        <div class="error-input input-error"></div>
      </div>
      <div class="content-nice">
        <p class="content-write">Password</p>
        <input class="content-input sivertines" type="text" placeholder="Enter your password"/>
        <div class="error-luffyconsection"></div>
      </div>
      <div class="content-nice">
        <p class="content-writesection">
         Encryption</p>
        <input class="content-inputsection" type="text" placeholder="WPA"/>
        <div class="producttion">
          <p class="production-section">       WPA</p>
          <p class="production-section">       WPA2</p>
        </div>
      </div>
      </div>
        `);
      const $ssidInput = $(".oversuper");
      const $passwordInput = $(".sivertines");

      if ($ssidInput.length) {
        $ssidInput.on("keydown", function (event) {
          if (event.key === "Enter") {
            const value = $ssidInput.val().trim();
            const $errorDiv = $ssidInput.parent().find(".error-input");
            if (value === "") {
              event.preventDefault();
              $errorDiv.text("Please enter your SSID!");
            } else {
              $errorDiv.text("");
            }
          }
        });
      }

      if ($passwordInput.length) {
        $passwordInput.on("keydown", function (event) {
          if (event.key === "Enter") {
            const value = $passwordInput.val().trim();
            const $errorDiv = $passwordInput
              .parent()
              .find(".error-luffyconsection");
            if (value === "") {
              event.preventDefault();
              $errorDiv.text("Please enter your password!");
            } else {
              $errorDiv.text("");
            }
          }
        });
      }

      const $input = $(".content-inputsection");
      const $options = $(".producttion");
      const $optionItems = $(".producttion p");

      $input.on("click", function (e) {
        $options.show();
      });

      $optionItems.on("click", function () {
        $input.val($(this).text().trim());
        $options.hide();
      });

      $(document).on("click", function (e) {
        if (
          !$(e.target).closest(".content-inputsection, .producttion").length
        ) {
          $options.hide();
        }
      });

      const $productionSections = $(".production-section");

      $productionSections.on("click", function () {
        $productionSections.removeClass("active");
        $(this).addClass("active");
      });
    });
  });
});
*/

const aceoneWifi = document.querySelectorAll(".aceoneWifi");
aceoneWifi.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aceoneWifi.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="contention">
      <div class="content-nice">
        <p class="content-write">Wireless SSID</p>
        <input class="content-input oversuper" type="text" placeholder="Enter your wireless SSID"/>
        <div class="error-input input-error"></div>
      </div>
      <div class="content-nice">
        <p class="content-write">Password</p>
        <input class="content-input sivertines" type="text" placeholder="Enter your password"/>
        <div class="error-luffyconsection"></div>
      </div>
      <div class="content-nice">
        <p class="content-writesection">
Encryption</p>
        <input class="content-inputsection" type="text" placeholder="WPA"/>
        <div class="producttion">
          <p class="production-section">       WPA</p>
          <p class="production-section">       WPA2</p>
        </div>
      </div>
      </div>
    `;
    const ssidInput = document.querySelector(".oversuper");
    const passwordInput = document.querySelector(".sivertines");
    if (ssidInput) {
      ssidInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = ssidInput.value.trim();
          const errorDiv =
            ssidInput.parentElement.querySelector(".error-input");
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your SSID!";
          } else {
            errorDiv.textContent = "";
          }
        }
      });
    }
    if (passwordInput) {
      passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = passwordInput.value.trim();
          const errorDiv = passwordInput.parentElement.querySelector(
            ".error-luffyconsection"
          );
          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your password!";
          } else {
            errorDiv.textContent = "";
          }
        }
      });
    }
    const input = document.querySelector(".content-inputsection");
    const options = document.querySelector(".producttion");
    const optionItems = document.querySelectorAll(".producttion p");
    input.addEventListener("click", function (e) {
      options.style.display = "block";
    });
    optionItems.forEach((item) => {
      item.addEventListener("click", function () {
        input.value = item.textContent.trim();
        options.style.display = "none";
      });
    });
    document.addEventListener("click", function (e) {
      if (!input.contains(e.target) && !options.contains(e.target)) {
        options.style.display = "none";
      }
    });
    const productionSections = document.querySelectorAll(".production-section");
    productionSections.forEach((item) => {
      item.addEventListener("click", function () {
        productionSections.forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
});

/* vcard*/
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".aceoneVcard").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".aceoneVcard").click(function () {
      $listDiv.html(`
         <div class="contention">
      <div class="content-nice">
        <p class="content-write">First name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
        <p class="content-write">Email</p>
        <input class="content-input inputertion sectionlist" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
        <p class="content-britenter">Fax</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Your job</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Street</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Zip</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Country</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      <div class="content-nice">
        <p class="content-write">Last name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
         <p class="content-write">Phone</p>
        <input class="content-input inputertion sectionlist" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
         <p class="content-britenter">Birthday</p>
        <input class="content-input inputertion" type="date" placeholder=""/>
         <p class="content-britenter">Company</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">City</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">State</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">Wedsite</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      </div>
        `);
      $(".sectioncontent, .sectionlist").on("keydown", function (event) {
        if (event.key === "Enter") {
          const input = $(this);
          const value = input.val().trim();
          const parent = input.parent();

          const errorDiv = parent.find(".error-input");
          const errorSection = parent.find(".input-errorsion");
          const aceImg = $(".ace-images");

          if (value === "") {
            event.preventDefault();
            errorDiv.text("Please enter your  !");
            errorSection.text("Please enter your  !");
            if ($aceImg.length) aceImg.attr("src", "img/qr to.png");
          } else {
            errorDiv.text("");
            errorSection.text("");
            if (aceImg.length) aceImg.attr("src", "img/qrVcard.png");
          }
        }
      });
    });
  });
});
*/
const aceoneVcard = document.querySelectorAll(".aceoneVcard");
aceoneVcard.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aceoneVcard.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="contention">
      <div class="content-nice">
        <p class="content-write">First name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
        <p class="content-write">Email</p>
        <input class="content-input inputertion sectionlist" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
        <p class="content-britenter">Fax</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Your job</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Street</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Zip</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
        <p class="content-britenter">Country</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      <div class="content-nice">
        <p class="content-write">Last name</p>
        <input class="content-input inputertion sectioncontent" type="text" placeholder=""/>
        <div class="error-input input-error"></div>
         <p class="content-write">Phone</p>
        <input class="content-input inputertion sectionlist" type="text" placeholder=""/>
        <div class="input-errorsion"></div>
         <p class="content-britenter">Birthday</p>
        <input class="content-input inputertion" type="date" placeholder=""/>
         <p class="content-britenter">Company</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">City</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">State</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
         <p class="content-britenter">Wedsite</p>
        <input class="content-input inputertion" type="text" placeholder=""/>
      </div>
      </div>
    `;
    const inputs = document.querySelectorAll(".sectioncontent, .sectionlist");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");
          const errorSection =
            input.parentElement.querySelector(".input-errorsion");

          if (value === "") {
            event.preventDefault();
            errorDiv.textContent = "Please enter your  !";
            errorSection.textContent = "Please enter your  !";
            const aceImg = document.querySelector(".ace-images");
            if (aceImg) aceImg.src = "img/qr to.png";
          } else {
            errorDiv.textContent = "";
            errorSection.textContent = "";
            const aceImg = document.querySelector(".ace-images");
            if (aceImg) aceImg.src = "img/qrVcard.png";
          }
        }
      });
    });
  });
});

/* aceoneggreview*/
/*
$(document).ready(function () {
  const $listDiv = $("#contentierList");
  $(".aceoneggreview").click(function (e) {
    $listDiv.css(
      "display",
      $listDiv.css("display") === "block" ? "none" : "block"
    );
    e.stopPropagation();
    $(".aceoneggreview").click(function () {
      $listDiv.html(`
        <div class="content">
        <p class="content-write">Enter content </p>
        <input class="content-input" type="text" placeholder="Enter your google my business review link"/>
        <div class="error-input input-error"></div>
      </div>
        `);
      $(".content-input").on("keydown", function (event) {
        if (event.key === "Enter") {
          const input = $(this);
          const value = input.val().trim();
          const errorDiv = input.parent().find(".error-input");

          if (value === "") {
            event.preventDefault();
            errorDiv.text("Please enter your!");
          } else {
            errorDiv.text("");
          }
        }
      });
    });
  });
});
*/
const aceoneggreview = document.querySelectorAll(".aceoneggreview");
aceoneggreview.forEach(function (item) {
  item.addEventListener("click", function (e) {
    listDiv.style.display =
      listDiv.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });
});

aceoneggreview.forEach((item) => {
  item.addEventListener("click", () => {
    listDiv.innerHTML = `
      <div class="content">
        <p class="content-write">Enter content </p>
        <input class="content-input" type="text" placeholder="Enter your google my business review link"/>
        <div class="error-input input-error"></div>
      </div>
    `;
    const inputs = document.querySelectorAll(".content-input");
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const value = input.value.trim();
          const errorDiv = input.parentElement.querySelector(".error-input");

          if (value === "") {
            event.preventDefault();
            errorDiv.textContent =
              "Please enter Google My Business review link!";
          } else {
            errorDiv.textContent = "";
          }
        }
      });
    });
  });
});

const contentItems = $(".contentner-write");

contentItems.on("click", function () {
  contentItems.removeClass("active");
  $(this).addClass("active");
});
/*
const contentItems = document.querySelectorAll(".contentner-write");

contentItems.forEach((item) => {
  item.addEventListener("click", function () {
    contentItems.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
*/

const toggleBox = $("#toggleColorBox");
const colorOptions = $("#colorOptions");

toggleBox.click(function (e) {
  colorOptions.toggle();
  e.stopPropagation();
});
colorOptions.click(function (e) {
  e.stopPropagation();
});
/*
const toggleBox = document.getElementById("toggleColorBox");
const colorOptions = document.getElementById("colorOptions");

toggleBox.addEventListener("click", function (e) {
  colorOptions.style.display =
    colorOptions.style.display === "block" ? "none" : "block";
  e.stopPropagation();
});
document.addEventListener("click", function () {
  colorOptions.style.display = "none";
});

colorOptions.addEventListener("click", function (e) {
  e.stopPropagation();
});
*/
const onemoretitle = $("#onemoretitle");
const colortitle = $("#colortitle");

onemoretitle.click(function (e) {
  colortitle.toggle();
  e.stopPropagation();
});
colortitle.click(function (e) {
  e.stopPropagation();
});
/*
const onemoretitle = document.getElementById("onemoretitle");
const colortitle = document.getElementById("colortitle");

onemoretitle.addEventListener("click", function (e) {
  colortitle.style.display =
    colortitle.style.display === "block" ? "none" : "block";
  e.stopPropagation();
});

document.addEventListener("click", function () {
  colortitle.style.display = "none";
});

colortitle.addEventListener("click", function (e) {
  e.stopPropagation();
});
*/
const designcolor = $("#designcolor");
const designContent = $("#designContent");

designcolor.click(function (e) {
  designContent.toggle();
  e.stopPropagation();
});
designContent.click(function (e) {
  e.stopPropagation();
});
/*
const designcolor = document.getElementById("designcolor");
const designContent = document.getElementById("designContent");

designcolor.addEventListener("click", function (e) {
  designContent.style.display =
    designContent.style.display === "block" ? "none" : "block";
  e.stopPropagation();
});

document.addEventListener("click", function () {
  designContent.style.display = "none";
});

designContent.addEventListener("click", function (e) {
  e.stopPropagation();
});
*/
/* active của các thẻ content color design image*/
const iconlogoImage = $(".iconlogo-image");

iconlogoImage.click(function () {
  iconlogoImage.removeClass("active");
  $(this).addClass("active");
});
/*
const iconlogoImage = document.querySelectorAll(".iconlogo-image");

iconlogoImage.forEach((item) => {
  item.addEventListener("click", function () {
    iconlogoImage.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
*/
const logonenimage = $(".logonen-image");
logonenimage.click(function () {
  logonenimage.removeClass("active");
  $(this).addClass("active");
});

/*
const logonenimage = document.querySelectorAll(".logonen-image");

logonenimage.forEach((item) => {
  item.addEventListener("click", function () {
    logonenimage.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
*/

const contentieronemore = document.querySelectorAll(".contentier-onemore");
contentieronemore.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      const icon = this.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
      return;
    }
    contentieronemore.forEach((el) => {
      el.classList.remove("active");
      const icon = el.querySelector(".onemore-iconmomen");
      if (icon) icon.innerHTML = "&#8744;";
    });
    this.classList.add("active");
    const icon = this.querySelector(".onemore-iconmomen");
    if (icon) icon.innerHTML = "&#8743;";
  });
});

/*zoom ảnh QR code */

const aceimages = $(".contentier-hooover");
const overlaydis = $("#overlaydis");
const overlaydiver = $("#overlaydiver");

aceimages.click(function () {
  const parent = $(this).closest(".contentier-ace");
  if (parent.length) {
    const qrImg = parent.find(".ace-images");
    if (qrImg.length) {
      overlaydiver.attr("src", qrImg.attr("src"));
      overlaydis.css("display", "flex");
    }
  }
});

overlaydis.click(function () {
  overlaydis.css("display", "none");
});

/*
const aceimages = document.querySelector(".contentier-hooover");
const overlaydis = document.getElementById("overlaydis");
const overlaydiver = document.getElementById("overlaydiver");

aceimages.addEventListener("click", function () {
  const parent = this.closest(".contentier-ace");
  if (parent) {
    const qrImg = parent.querySelector(".ace-images");
    if (qrImg) {
      overlaydiver.src = qrImg.src;
      overlaydis.style.display = "flex";
    }
  }
});
overlaydis.addEventListener("click", function () {
  overlaydis.style.display = "none";
});
/* khi ấn nut reset ảnh */
const saboWrite = document.querySelectorAll(".sabo-write");

saboWrite.forEach(function (element) {
  element.addEventListener("click", function () {
    const aceImg = document.querySelector(".ace-images");
    if (aceImg) aceImg.src = "img/qr to.png";
  });
});
/* Frequently Asked Questions */
const contentBlocks = $(".contentonesection-write");

contentBlocks.each(function () {
  const section = $(this);
  const answer = section.find(".productsectioner");
  const question = section.find(".contentonesection-butru");
  const icon = section.find(".contentonesection-icon");

  if (answer.length) {
    answer.hide();
    if (icon.length) icon.html("&#62;");
  }

  if (question.length && answer.length) {
    question.on("click", function (e) {
      const isVisible = answer.is(":visible");
      answer.toggle();
      if (icon.length) {
        icon.html(isVisible ? "&#62;" : "&#8744;");
      }
      e.stopPropagation();
    });
  }
});

/*
const contentBlocks = document.querySelectorAll(".contentonesection-write");
contentBlocks.forEach(function (section) {
  var answer = section.querySelector(".productsectioner");
  var question = section.querySelector(".contentonesection-butru");
  var icon = section.querySelector(".contentonesection-icon");

  if (answer) {
    answer.style.display = "none";
    if (icon) icon.innerHTML = "&#62;";
  }
  if (question && answer) {
    question.addEventListener("click", function (e) {
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
      if (icon) {
        icon.innerHTML = isVisible ? "&#62;" : "&#8744;";
      }
      e.stopPropagation();
    });
  }
});
*/
const groups = document.querySelectorAll(".image-group");
let current = 0;

setInterval(() => {
  const currentGroup = groups[current];
  const next = (current + 1) % groups.length;
  const nextGroup = groups[next];

  currentGroup.classList.remove("active");
  currentGroup.classList.add("out");

  nextGroup.classList.remove("out");
  setTimeout(() => {
    nextGroup.classList.add("active");
  }, 100);

  current = next;
}, 8000);

const fontwirtecontainer = document.querySelectorAll(".fontwirte-container");
fontwirtecontainer.forEach(function (section) {
  var answer = section.querySelector(".prudoctionner");
  var question = section.querySelector(".fine-dorgot");
  var icon = section.querySelector(".fontwirte-iconness");
  if (answer) {
    answer.style.display = "none";
    if (icon) icon.innerHTML = "&#62;";
  }
  if (question && answer) {
    question.addEventListener("click", function (e) {
      fontwirtecontainer.forEach(function (otherSection) {
        if (otherSection !== section) {
          var otherAnswer = otherSection.querySelector(".prudoctionner");
          var otherIcon = otherSection.querySelector(".fontwirte-iconness");
          if (otherAnswer) otherAnswer.style.display = "none";
          if (otherIcon) otherIcon.innerHTML = "&#62;";
          otherSection.classList.remove("active");
        }
      });
      if (answer.style.display !== "block") {
        answer.style.display = "block";
        if (icon) icon.innerHTML = "&#8744;";
        section.classList.add("active");
      }
      e.stopPropagation();
    });
  }
  console.log(fontwirtecontainer);
});
const imangecontent = $("#imange-content");
const business = $(".fine-dorgot");

business.on("click", function (e) {
  imangecontent.css("display", "block");
  e.stopPropagation();
  imangecontent.html(`
     <div class="contentnis" >
          <div class="imgsection-listimg">
            <img src="/img/end-1.png" />
            <p class="listimg-content">Online shopping</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-2.png" />
            <p class="listimg-content">Online ordering</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-3.png" />
            <p class="listimg-content">Accessing product info</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-4.png" />
            <p class="listimg-content">Connecting social media</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-5.png" />
            <p class="listimg-content">Doing payment</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-6.png" />
            <p class="listimg-content">Connecting WiFi</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-7.png" />
            <p class="listimg-content">Sharing feedback</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-8.png" />
            <p class="listimg-content">Downloading the app</p>
          </div>
        </div>
  `);
  console.log(business);
});
/*
const imangecontent = document.getElementById("imange-content");
const business = document.querySelectorAll(".fine-dorgot");

business.forEach(function (item) {
  item.addEventListener("click", function (e) {
    imangecontent.style.display =
      imangecontent.style.display === "block" ? "block" : "block";
    e.stopPropagation();
  });
});
business.forEach((item) => {
  item.addEventListener("click", () => {
    imangecontent.innerHTML = `
      <div class="contentnis" >
          <div class="imgsection-listimg">
            <img src="/img/end-1.png" />
            <p class="listimg-content">Online shopping</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-2.png" />
            <p class="listimg-content">Online ordering</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-3.png" />
            <p class="listimg-content">Accessing product info</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-4.png" />
            <p class="listimg-content">Connecting social media</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-5.png" />
            <p class="listimg-content">Doing payment</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-6.png" />
            <p class="listimg-content">Connecting WiFi</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-7.png" />
            <p class="listimg-content">Sharing feedback</p>
          </div>
          <div class="imgsection-listimg">
            <img src="/img/end-8.png" />
            <p class="listimg-content">Downloading the app</p>
          </div>
        </div>
    `;
  });
});
*/

const margketting = $(".margketting");

margketting.on("click", function (e) {
  imangecontent.css("display", "block");
  e.stopPropagation();
  imangecontent.html(`
    <div class="contentnis">
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/marketting-1.png" />
      <img src="/img/marketting-.png" />
    </div>
    <div class="listimg-content">Promoting sales, events on Posters</div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img  src="/img/markettin-3.png" />
      <img src="/img/marketting-4.png" />
    </div>
    <div class="listimg-content">
      Promoting products, services on Flyers, Brochures
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/marketing-5.png" />
      <img src="/img/markrtting06.png" />
    </div>
    <div class="listimg-content">Promoting services on Sandwich boards</div>
   < /div>
 </div>

    `);
  console.log(margketting);
});

/*
const margketting = document.querySelectorAll(".margketting");

margketting.forEach(function (item) {
  item.addEventListener("click", function (e) {
    imangecontent.style.display =
      imangecontent.style.display === "block" ? "block" : "block";
    e.stopPropagation();
  });
});
margketting.forEach((item) => {
  item.addEventListener("click", () => {
    imangecontent.innerHTML = `
<div class="contentnis">
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/marketting-1.png" />
      <img src="/img/marketting-.png" />
    </div>
    <div class="listimg-content">Promoting sales, events on Posters</div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img  src="/img/markettin-3.png" />
      <img src="/img/marketting-4.png" />
    </div>
    <div class="listimg-content">
      Promoting products, services on Flyers, Brochures
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/marketing-5.png" />
      <img src="/img/markrtting06.png" />
    </div>
    <div class="listimg-content">Promoting services on Sandwich boards</div>
  </div>
</div>

    `;
  });
});
*/
const Freelancer = $(".Freelancer");

Freelancer.on("click", function (e) {
  imangecontent.css("display", "block");
  e.stopPropagation();
  imangecontent.html(`
    <div class="contentnis">
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/freelan-1.png" />
      <img src="/img/freelan-2.png" />
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img class="first-imaeges" src="/img/freelan-3.png" />
    </div>
    <div class="listimg-content">
      Promoting products, services on Flyers, Brochures
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/freelan-4.png" />
      <img src="/img/freelan-5.png" />
    </div>
    <div class="listimg-content">Promoting services on Sandwich boards</div>
  </div>
 </div>
    `);
  console.log(Freelancer);
});

/*
const Freelancer = document.querySelectorAll(".Freelancer");

Freelancer.forEach(function (item) {
  item.addEventListener("click", function (e) {
    imangecontent.style.display =
      imangecontent.style.display === "block" ? "block" : "block";
    e.stopPropagation();
  });
});
Freelancer.forEach((item) => {
  item.addEventListener("click", () => {
    imangecontent.innerHTML = `
<div class="contentnis">
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/freelan-1.png" />
      <img src="/img/freelan-2.png" />
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img class="first-imaeges" src="/img/freelan-3.png" />
    </div>
    <div class="listimg-content">
      Promoting products, services on Flyers, Brochures
    </div>
  </div>
  <div class="content-first">
    <div class="imgsection-listimgner">
      <img src="/img/freelan-4.png" />
      <img src="/img/freelan-5.png" />
    </div>
    <div class="listimg-content">Promoting services on Sandwich boards</div>
  </div>
</div>
    `;
  });
});
*/

function swapColors() {
  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const text1 = document.getElementById("colorText1");
  const text2 = document.getElementById("colorText2");

  const tempColor = color1.value;
  color1.value = color2.value;
  color2.value = tempColor;

  const tempText = text1.value;
  text1.value = text2.value;
  text2.value = tempText;
}
console.log(swapColors());

document.getElementById("singleColorRadio").addEventListener("click", () => {
  document.getElementById("gradientControls").classList.add("hidden");
});

document.getElementById("gradientColorRadio").addEventListener("click", () => {
  document.getElementById("gradientControls").classList.remove("hidden");
});

document.getElementById("customEyeCheckbox").addEventListener("change", (e) => {
  const eyeSection = document.getElementById("eyeColorSection");
  if (e.target.checked) {
    eyeSection.classList.remove("hidden");
  } else {
    eyeSection.classList.add("hidden");
  }
});
const selected = document.getElementById("selectedOption");
const options = document.getElementById("optionsList");
const dropdown = document.getElementById("gradientDropdown");

selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});
options.addEventListener("click", (e) => {
  if (e.target.dataset.value) {
    selected.textContent = e.target.dataset.value;

    options
      .querySelectorAll("div")
      .forEach((opt) => opt.classList.remove("active"));
    e.target.classList.add("active");

    options.style.display = "none";
  }
  console.log(options);
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    options.style.display = "none";
  }
});

document
  .getElementById("openFileTrigger")
  .addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });
