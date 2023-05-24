let about = document.querySelector('section#about .row:last-child')
let aboutContents = [
"Hi, I'm Kgodisho, an aspiring Cloud User Experience Developer. I am currently a student at a coding academy gaining experience in full stack web development. I enjoy creating beautiful, responsive websites that provide an excellent user experience. I am fueled by my passion for understanding the nuances of the advancing world of Technology. I considers myself a 'forever student', eager to both build on my academic foundations in systems development by staying in tune with the latest tech trends through continued coursework and professional development."," In my free time, I enjoy both abstract and street photography and all things that involve art and being creative"

]

//loop through the conten ts
aboutContents.forEach((content)=>{
about.innerHTML += 
`<p class = 'lead'>${content}</p>`
})

// Education
let education = [
    {
        id: 1,
        year: 2020,
        description: 'I got my certificates on Data science',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: 'I got my certificates on Advanced to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2014,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2005,
        description: 'Completed my course on PC Engineering',
        place: 'Havatech',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})