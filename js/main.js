let team = [
                {
                    'nome': 'Wayne Barnett',
                    'ruolo': 'Founder & CEO',
                    'foto': 'wayne-barnett-founder-ceo.jpg'
                },

                {
                    'nome': 'Angela Caroll',
                    'ruolo': 'Chief Editor',
                    'foto': 'caroll-chief-editor.jpg'
                },

                {
                    'nome': 'Walter Gordon',
                    'ruolo': 'Office Manager',
                    'foto': 'gordon-office-manager.jpg'
                },

                {
                    'nome': 'Angela Lopez',
                    'ruolo': 'Social Media Manager',
                    'foto': 'lopez-social-media-manager.jpg'
                },

                {
                    'nome': 'Scott Estrada',
                    'ruolo': 'Developer',
                    'foto': 'estrada-developer.jpg'
                },

                {
                    'nome': 'Barbara Ramos',
                    'ruolo': 'Graphic Designer',
                    'foto': 'barbara-ramos-graphic-designer.jpg'
                },

            ];

for( let chiave in team){

    let cards = document.createElement ('div');
    cards.classList.add('cards');
    cards.innerHTML = chiave + (team[chiave]);
    console.log(chiave);
    console.log(team[chiave]);
}