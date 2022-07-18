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

/*for( let chiave in team){

    let persona = document.createElement ('div');
    console.log(chiave);
    console.log(team[chiave]);
}*/

for( i=0; i<team.length; i++){
    console.log (team[i].nome);
    container.innerHTML += `
        <div class='cards'>
            <div class='name'>${team[i].nome}</div>
            <div class='role'>${team[i].ruolo}</div>
            <div class='pic'>${team[i].foto}</div>
        </div>
    `
}