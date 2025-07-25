
//place_id= ChIJS40sZfFuZZMRBrQ7sRB-yS4
//key= AIzaSyC9CmVUVCbVhXEePRFaLKNfLL95YouS6Ig


    const data = {
        "name": "Panificadora Araguaia",
        "rating": 4.2,
        "user_ratings_total": 314,
        "reviews": [
        {
            "author_name": "LORENA GONÇALVES",
            "author_url": "https://www.google.com/maps/contrib/104133858167745813180/reviews",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUqz6g_AlZPf3MMioYKaeQ-3IvD-hqhVne5W0UxGHsRp7gI5LeAXA=s128-c0x00000000-cc-rp-mo-ba3",
            "rating": 5,
            "relative_time_description": "2 meses atrás",
            "text": "Tudo muito bem feito e gostoso 😋😋"
        },
        {
            "author_name": "Josinei Borges",
            "author_url": "https://www.google.com/maps/contrib/107889498707062526812/reviews",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVNzQm5Yv2XnSKVxH0ITmrW1_tJrf9zRSexS2PTVzpOjEbBiQAa=s128-c0x00000000-cc-rp-mo-ba2",
            "rating": 4,
            "relative_time_description": "2 meses atrás",
            "text": "O produtos da panificadora são bons."
        },
        {
            "author_name": "Renata Ferreira 67",
            "author_url": "https://www.google.com/maps/contrib/105363811054438900025/reviews",
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLvdnvt9jFTcix7FvOkoyA7XyVXWO6dEctuDXISiQvU5L6IPA=s128-c0x00000000-cc-rp-mo-ba4",
            "rating": 4,
            "relative_time_description": "um ano atrás",
            "text": "O atendimento da funcionária da padaria foi excelente, tem várias opções de comidas e outros produtos."
        },
        {
            "author_name": "Dani Couto",
            "author_url": "https://www.google.com/maps/contrib/114722874262808092597/reviews",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjW5CeA2jCzVfR6AaJOdDd6BSTbn_CCYQ5ZjOECwfLb3xzan5SBK=s128-c0x00000000-cc-rp-mo-ba2",
            "rating": 5,
            "relative_time_description": "8 meses atrás",
            "text": "Muito bom. Tem uma ótima variedade de comidas"
        },
        {
            "author_name": "Letícia Dos Santos Salles",
            "author_url": "https://www.google.com/maps/contrib/105120860268546151641/reviews",
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIHCzIP9HfvWMn-orY1Gz7dyAyKwYcfaECmx2tfb8fCBpBXPQFX=s128-c0x00000000-cc-rp-mo",
            "rating": 5,
            "relative_time_description": "2 anos atrás",
            "text": "Sempre com lanches maravilhosos, e com certeza o melhor é o daqui, tudo muito saboroso. Funcionários educados e prestativos. Parabéns 💕"
        }
        ]
    };

    const container = document.getElementById('reviews');
    let html = `<h2>${data.name}</h2><p>⭐ ${data.rating} (${data.user_ratings_total} avaliações)</p>`;

    data.reviews.forEach(r => {
        html += `
        <div style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
            <a href="${r.author_url}" target="_blank">
            <img src="${r.profile_photo_url}" width="40" style="border-radius: 50%; vertical-align: middle;">
            <strong>${r.author_name}</strong>
            </a><br>
            ⭐ ${r.rating} - <em>${r.relative_time_description}</em>
            <p>${r.text}</p>
        </div>
        `;
    });

    container.innerHTML = html;