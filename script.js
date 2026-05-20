// fonction qui  fait apparaitre le PopUp en changant le  display de NONE à Flex
function apparition () {
    $(".aside").css("display","flex");
}

// la fonction qui en cliquant sur le boutton croix enleve le PopUp en remettant le display en NONE
function cacher (){
    $(".fermeture").on("click", () => {
        $(".aside").css("display", "none");
    })
}


$(".animation1").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/super_mario_bros.jpg");
    $(".detail h1").text("Mario Bros");
    $(".description").text("U plombier nommé Mario parcourt un labyrinthe souterrain avec son frère, Luigi, essayant de sauver une princesse capturée. Adaptation cinématographique du célèbre jeu vidéo. ");
    $(".annee").text("Année de sortie : 2010");
    $(".personnage").text("Avec : Chris pratt, Jack black, Charlie Day");
    $(".realisateur").text("Réalisateurs : Aaron Horvath, Michael Jelenic");
})

$(".animation2").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/how_to_train_your_dragon.jpg")
    $(".detail h1").text("How To Train Your Dragon")
    $(".description").text("Hiccup est un adolescent viking de l'île de Berk, où se battre avec des dragons est un mode de vie. Ses idées progressistes et son sens de l'humour étrange le tiennent à part des autres, malgré le fait que son père est le chef du clan. Entraîné dans une école de combat de dragon, il essaie de prouvr qu'il est un vrai viking. Mais quand il se lie d'amitier avec un dragon blessé qu'il nomme Kromou, il a la chance de tracer une nouvelle voie pour l'avenir de son peuple");
    $(".annee").text("Année de sortie : 2010")
    $(".personnage").text("Avec :Jay Baruchel, Gerald Butler, America ferrera, …")
    $(".realisateur").text("Réalisateurs : chris Sanders, Dean DeBois")
})

$(".animation3").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/croods_2.jpg")
    $(".detail h1").text("Les Croods 2")
    $(".description").text("Les Croods partent en quête d'un endroit où habiter. Quand ils découvrent un paradis idyllique entouré de murs, ils pensent que tous leurs problèmes sont résolus. Mais une famille y vit déjà : les Betterman. Avec leur cabane dans les arbres, leurs inventions étonnantes et leurs hectares irrigués de produits frais, Les Betterman sont bien au-dessus des Croods sur l'échelle de l'évolution. Les tensions ne tardent pas à s'intensifier entre la famille des grottes et la famille moderne.");
    $(".annee").text("Année de sortie : 2020")
    $(".personnage").text("Avec : Nicoas Cage, Jiel Crawford, Emma stone")
    $(".realisateur").text("Réalisateurs : Aaron Horvath, Joel Crawford")
})

$(".animation4").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/La-Reine-des-Neiges-1.jpg")
    $(".detail h1").text("La Reine des Neiges  1")
    $(".description").text("Anna, une jeune fille aussi audacieuse qu'optimiste, se lance dans un incroyable voyage en compagnie de Kristoff, un montagnard expérimenté, et de son fidèle renne Sven, à la recherche de sa soeur, Elsa, la reine des neiges qui a plongé le royaume d'Arendelle dans un hiver éternel. En chemin, ils vont rencontrer de mystérieux trolls et un drôle de bonhomme de neige nommé Olaf, braver les conditions extrêmes des sommets escarpés et glacés, et affronter la magie qui les guette à chaque pas. ");
    $(".annee").text("Année de sortie : 2013")
    $(".personnage").text("Avec : kristen Bell, idina Menzel, Josh Gad")
    $(".realisateur").text("Réalisateur : Jennifer Lee, Chris Buck")
})


$(".reeli").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/les_figures_de_l_ombre.jpg")
    $(".detail h1").text("Les Figures des Ombres")
    $(".description").text("Ce film narre le destin extraordinaire, au début des années 60, des trois scientifiques afro-américaines qui ont permis aux États-Unis de prendre la tête de la conquête spatiale, grâce à la mise en orbite de l'astronaute John Glenn. Maintenues dans l'ombre de leurs collègues masculins et dans celle d'un pays en proie à de profondes inégalités, leur histoire longtemps restée méconnue est enfin portée à l'écran. ");
    $(".annee").text("Année de sortie : 2017")
    $(".personnage").text("Avec :Octavia Spencer, Teraji P. Henson, Janelle Monàe")
    $(".realisateur").text("Réalisateur : John singleton")
})

$(".reel2").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/bob_marley_one_love.jpg")
    $(".detail h1").text("Bob Marley One Love")
    $(".description").text("L'auteur-compositeur-interprète jamaïcain Bob Marley fait face à l'adversité pour devenir le musicien de reggae le plus célèbre au monde. Le chemin qu' il a emprunté l'a amené à réaliser une musique révolutionnaire.");
    $(".annee").text("Année de sortie : 2024")
    $(".personnage").text("Avec :Kingsley Ben-Adir, Lashana Lynch, Michael Gandolfini")
    $(".realisateur").text("Reinaldo Marcus Green")
})

$(".reel3").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/Strainght_outta_compton.jpg")
    $(".detail h1").text("Strainght Outta Compton")
    $(".description").text("En 1987, 5 jeunes hommes exprimaient leur frustration et leur colère pour dénoncer les conditions de vie de l'endroit le plus dangereux de l'Amérique avec l'arme la plus puissante qu'ils possédaient : leur musique. Voici la véritable histoire de ces rebelles, armés uniquement de leur parole, de leur démarche assurée et de leur talent brut, qui ont résisté aux autorités qui les opprimaient. Ils ont ainsi formé le groupe de rappeurs des N.W.A. en dénonçant la réalité de leur quartier. ");
    $(".annee").text("Année de sortie : 2015")
    $(".personnage").text("AAvec :O’Shea Jackson Jr, Corey Hawkins, Jason Mitchell")
    $(".realisateur").text("Réalisateur : F. Gary Gray")
})

$(".reel4").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/Numéro_24.jpg")
    $(".detail h1").text("Numéro 24")
    $(".description").text("Gunnar Sønsteby résiste sans relâche à l'occupation nazie de la Norvège, aidé par le gang d'Oslo, un groupe passé maître dans l'art du sabotage formé par l'armée britannique. ");
    $(".annee").text("Année de sortie : 2024")
    $(".personnage").text("Avec :Sijur Vatne brean, Erik Hivju, Philip Helgar")
    $(".realisateur").text("Réalisateur : John Andreas Andersen")
})

$(".reel5").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/dolemite_is_my_name.webp")
    $(".detail h1").text("Dolemite Is My Name")
    $(".description").text("Los Angeles, année 1970. L’humoriste Rudy Ray Moore relance sa carrière avec Dolemite, son alter ego salace, dont il veut à tout prix faire une star de cinéma ");
    $(".annee").text("Année de sortie : 2021")
    $(".personnage").text("Avec : Eddie Murphy, Wesley Snipes, Keegan-Michael, Mike Epps, ...")
    $(".realisateur").text("Réalisateur : Craing Brewer")
})

$(".policier1").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/le-flic-de-beverly-hills-1-.jpg.webp")
    $(".detail h1").text("Le Flic de Beverly Hills 1")
    $(".description").text("Axel Foley, un policier désinvolte et indiscipliné de la ville de Détroit, vient de se faire réprimander par son patron pour avoir essayé d'arrêter des trafiquants de cigarettes sans l'avoir informé de son projet, ce qui a nui à son infiltration dans le réseau, faisant ainsi échouer sa mission non autorisée. De retour à son appartement, Axel retrouve son ami Mikey Tandino, travaillant à Beverly Hills et venu lui rendre visite. ");
    $(".annee").text("Année de sortie : 1984")
    $(".personnage").text("Avec : Eddy Murphy, Kevin Bacon,Joseph Gordon-Levitt")
    $(".realisateur").text("Réalisateur : Martin Brest")
})

$(".policier2").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/bad_boys.webp")
    $(".detail h1").text("Bad Boys 1")
    $(".description").text("Si Mike Lowrey est un séducteur invétéré, héritier d'une fortune et policier par passion, son collègue et ami Marcus Burnett est un homme rangé, marié et père de famille. Leur amitié ne les empêche cependant pas d'avoir des méthodes parfaitement différentes ");
    $(".annee").text("Année de sortie : 1995")
    $(".personnage").text("Avec : Will Smith, Martin Lawenrce, Theresa")
    $(".realisateur").text("Réalisateur : Michael Bay")
})

$(".policier3").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/Die_Hard.jpg")
    $(".detail h1").text("Die Hard Piège de Crystal")
    $(".description").text("Un policier new-yorkais, John McClane, est séparé de sa femme Holly, cadre dans une puissante multinationale japonaise, la Nakatomi Corporation. Venu à Los Angeles passer les fêtes avec elle, il se rend à la tour Nakatomi où le patron donne une grande soirée. Tandis que John s'isole pour téléphoner, un groupe de terroristes allemands, dirigé par Hans Gruber, pénètre dans l'immeuble. ");
    $(".annee").text("Année de sortie : 1988")
    $(".personnage").text("Avec : Bruce Willis, Alan Rickman, Bonnie Badelia")
    $(".realisateur").text("Réalisateur : John McTierman")
})

$(".policier4").on("click", () => {
    apparition ();
    cacher ();
    $("img").attr("src", "Images/Shaft.jpg")
    $(".detail h1").text("Shaft")
    $(".description").text("Une nuit, dans un bar de Manhattan, l'inspecteur John Shaft, flic noir aux méthodes peu orthodoxes et au sex-appeal infaillible, est appelé à la suite d'une agression raciste. Quelques minutes après son arrivée sur le lieu du crime, la victime - l'étudiant noir Trey Howard - succombe à un traumatisme crânien. La barmaid Diane Palmieri, unique témoin oculaire du drame, désigne discrètement à Shaft le coupable : Walter Wade Jr ");
    $(".annee").text("Année de sortie : 2000")
    $(".personnage").text("Avec : Samuel L. Jackson, Christian Bale, Jeffrey Wright")
    $(".realisateur").text("Réalisateur : John singleton")
})
