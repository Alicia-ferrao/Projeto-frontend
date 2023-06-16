// Dados em formato JSON
var postsData = [
    {
        "author": "Jona Martin",
        "date": "Novembro 20 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c7.jpg",
        "category": "Marketing Digital"
    },
    {
        "author": "Clarice José",
        "date": "Dezembro 21 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c8.jpg",
        "category": "Segurança Informática",
       
    },
    {
        "author": "Thomas Maria",
        "date": "Març0 2 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c9.jpg",
        "category": "Arquitetura de computadores"
    },
    {
        "author": "Armando Ribeiro",
        "date": "Janeiro 9 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c10.jpg",
        "category": "Comercio Eletrônico"
    },
    {
        "author": "Josefina Marques",
        "date": "Junho 14 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c11.jpg",
        "category": "Base de dados"
    },
    {
        "author": "Alicia Pereira",
        "date": "Maio 2 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c12.jpg",
        "category": "Inteligencia Artificial"
    },
    {
        "author": "Emanuel Jorge",
        "date": "Agosto 13 2023",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam nihil at quaerat impedit repellendus voluptas!",
        "image": "./img_category/c13.jpg",
        "category": "Frontend"
    }
];


        // Referência para a seção de todos os posts
        var allPostsSection = document.querySelector('.all_post');
        var categoryImage = document.querySelector('.card_img');
        var categoryAuthor = document.querySelector('.category p .cards_span');
        var categoryDate = document.querySelector('.category p');
        var categoryTitle = document.querySelector('.category h2');
        var categoryContent = document.querySelector('.category p:last-child');

        // Gerar os elementos HTML para cada post
        postsData.forEach(function(post) {
            // Criar o elemento div para o post
            var postDiv = document.createElement('div');
            postDiv.classList.add('posts');

            // Criar o elemento p para o autor e data
            var authorDateParagraph = document.createElement('p');
            var authorSpan = document.createElement('span');
            authorSpan.classList.add('cards_span');
            authorSpan.textContent = post.author;
            authorDateParagraph.innerHTML = 'By <span class="cards_span">' + post.author + '</span> | ' + post.date;

            // Criar o elemento h4 para o conteúdo do post
            var contentHeading = document.createElement('h4');
            contentHeading.textContent = post.content;

            // Adicionar os elementos ao postDiv
            postDiv.appendChild(authorDateParagraph);
            postDiv.appendChild(contentHeading);

            // Adicionar o postDiv à seção de todos os posts
            allPostsSection.appendChild(postDiv);

            // Adicionar evento de clique ao postDiv
            postDiv.addEventListener('click', function() {
                updateCategory(post);
            });
        });

        // Função para atualizar o category com base nos dados do post
        function updateCategory(post) {
            categoryImage.src = post.image;
            categoryAuthor.textContent = post.author;
            categoryDate.textContent = 'By ' + post.author + ' | ' + post.date;
            categoryTitle.textContent = post.category;
            categoryContent.textContent = post.content;
        }