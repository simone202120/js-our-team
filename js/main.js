let container = document.getElementById('container');
let team = [
                {
                    'nome': 'Wayne Barnett',
                    'ruolo': 'Founder & CEO',
                    'foto': 'wayne-barnett-founder-ceo.jpg'
                },

                {
                    'nome': 'Angela Caroll',
                    'ruolo': 'Chief Editor',
                    'foto': 'angela-caroll-chief-editor.jpg'
                },

                {
                    'nome': 'Walter Gordon',
                    'ruolo': 'Office Manager',
                    'foto': 'walter-gordon-office-manager.jpg'
                },

                {
                    'nome': 'Angela Lopez',
                    'ruolo': 'Social Media Manager',
                    'foto': 'angela-lopez-social-media-manager.jpg'
                },

                {
                    'nome': 'Scott Estrada',
                    'ruolo': 'Developer',
                    'foto': 'scott-estrada-developer.jpg'
                },

                {
                    'nome': 'Barbara Ramos',
                    'ruolo': 'Graphic Designer',
                    'foto': 'barbara-ramos-graphic-designer.jpg'
                },

            ];
let immagini = [];

for( i=0; i<team.length; i++){
    container.innerHTML += 
    `
        <div class='cards'>
            <div class='name'>${team[i].nome}</div>
            <div class='role'>${team[i].ruolo}</div>
            <div class='pic'>
                <img src= "img/${team[i].foto}"/></div>
            </div>
    `
}