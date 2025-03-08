const translations = {
  es: {
    // Traducciones existentes
    navSobreNosotros: "Sobre Nosotros",
    navRecetas: "Recetas",
    navRecetaDia: "Receta del día",
    navBlog: "Blog Culinario",
    navRegistro: "Registrate",
    heroTitle: "CookShelf",
    heroDescription: "¡Empieza a cocinar con lo que tienes hoy mismo!",
    heroButton: "Comenzar",
    categoriasTitle: "¿Qué hay en tu cocina?",
    categoriasSearch: "Buscar ingredientes...",
    categoriasButton: "Buscar recetas",
    recetasTitle: "Recetas de la semana",
    recetasSubtitle: "Basado en búsquedas populares",
    verReceta: "Ver receta",
    verMas: "Ver más",
    footerNewsletter: "Suscríbete a nuestro boletín",
    footerEmail: "Tu correo electrónico",
    footerSuscribirse: "Suscribirse",
    footerPrivacidad: "Política de Privacidad",
    footerTerminos: "Términos de Servicio",
    footerContacto: "Contacto",
    footerCopyright: "© 2025 CookShelf. Todos los derechos reservados.",
    // Blog
    blogTitle: "Blog Culinario",
    blogDescription: "Descubre técnicas, tendencias y secretos gastronómicos",
    readMore: "Leer más",
    blogCategories: "Categorías",
    // Nuevas traducciones para el formulario de registro
    formTitle: "Formulario de Registro",
    labelNombre: "Nombre:",
    labelApellido: "Apellido:",
    labelEmail: "Correo Electrónico:",
    labelPassword: "Contraseña:",
    labelConfirmPassword: "Confirmar Contraseña:",
    labelFechaNacimiento: "Fecha de Nacimiento:",
    btnRegistrarse: "Registrarse",
    modalConfirmacion: "¿Estás seguro de que deseas registrarte?",
    btnConfirmar: "Confirmar",
    btnCancelar: "Cancelar",

    // Ingredientes
    ingredTomato: "Tomate",
    ingredOnion: "Cebolla",
    ingredGarlic: "Ajo",
    ingredCarrot: "Zanahoria",
    ingredPotato: "Patata",
    ingredPepper: "Pimiento",
    ingredChicken: "Pollo",
    ingredBeef: "Carne de res",
    ingredFish: "Pescado",
    ingredCheese: "Queso",
    ingredMilk: "Leche",
    ingredEgg: "Huevo",

    // Mensajes adicionales
    noIngredientes: "No se han seleccionado ingredientes.",
  },
  en: {
    // Traducciones existentes
    navSobreNosotros: "About Us",
    navRecetas: "Recipes",
    navRecetaDia: "Recipe of the Day",
    navBlog: "Culinary Blog",
    navRegistro: "Sign Up",
    heroTitle: "CookShelf",
    heroDescription: "Start cooking with what you have today!",
    heroButton: "Get Started",
    categoriasTitle: "What's in your kitchen?",
    categoriasSearch: "Search ingredients...",
    categoriasButton: "Search recipes",
    recetasTitle: "Recipes of the week",
    recetasSubtitle: "Based on popular searches",
    verReceta: "View recipe",
    verMas: "View more",
    footerNewsletter: "Subscribe to our newsletter",
    footerEmail: "Your email",
    footerSuscribirse: "Subscribe",
    footerPrivacidad: "Privacy Policy",
    footerTerminos: "Terms of Service",
    footerContacto: "Contact",
    footerCopyright: "© 2025 CookShelf. All rights reserved.",
    // Blog
    blogTitle: "Culinary Blog",
    blogDescription: "Discover techniques, trends, and culinary secrets",
    readMore: "Read more",
    blogCategories: "Categories",
    // Nuevas traducciones para el formulario de registro
    formTitle: "Registration Form",
    labelNombre: "First Name:",
    labelApellido: "Last Name:",
    labelEmail: "Email:",
    labelPassword: "Password:",
    labelConfirmPassword: "Confirm Password:",
    labelFechaNacimiento: "Birth Date:",
    btnRegistrarse: "Register",
    modalConfirmacion: "Are you sure you want to register?",
    btnConfirmar: "Confirm",
    btnCancelar: "Cancel",

    // Ingredientes
    ingredTomato: "Tomato",
    ingredOnion: "Onion",
    ingredGarlic: "Garlic",
    ingredCarrot: "Carrot",
    ingredPotato: "Potato",
    ingredPepper: "Pepper",
    ingredChicken: "Chicken",
    ingredBeef: "Beef",
    ingredFish: "Fish",
    ingredCheese: "Cheese",
    ingredMilk: "Milk",
    ingredEgg: "Egg",

    // Mensajes adicionales
    noIngredientes: "No ingredients have been selected.",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const languageButtons = document.querySelectorAll(".language-btn");

  // Cargar idioma guardado o usar español por defecto
  const currentLang = localStorage.getItem("preferredLanguage") || "es";
  setLanguage(currentLang);

  // Resaltar el botón del idioma actual
  const activeBtn = document.querySelector(
    `.language-btn[data-lang="${currentLang}"]`
  );
  if (activeBtn) {
    activeBtn.classList.add("active");
  }

  // Añadir event listeners para cambiar idioma
  languageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);

      // Actualizar clases de botones
      languageButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Guardar preferencia
      localStorage.setItem("preferredLanguage", lang);
    });
  });
});

function setLanguage(lang) {
  // Traducir todos los elementos con atributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" && element.getAttribute("placeholder")) {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}
