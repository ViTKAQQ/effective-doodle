
const links = document.querySelectorAll('.scp-nav a');
const sections = document.querySelectorAll('.scp-content');


sections.forEach(section => {
    if (section.id !== 'about') {
        section.style.display = 'none';
    }
});


links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        sections.forEach(section => {
            section.style.display = 'none';
        });

       
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});

indow.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}



    function ChangeTextScale(scale) {
        const contentElements = document.querySelectorAll('.scp-content p, .scp-content h1, .scp-content h2');

        switch (scale) {
            case "big":
                contentElements.forEach(element => {
                    element.style.fontSize = '1.5rem';
                });
                break;
            case "normal":
                contentElements.forEach(element => {
                    element.style.fontSize = '1rem';
                });
                break;
            case "small":
                contentElements.forEach(element => {
                    element.style.fontSize = '0.8rem';
                });
                break;
            default:
                contentElements.forEach(element => {
                    element.style.fontSize = '1rem';
                });
                break;
        }
    }

    window.addEventListener("resize", AutoScaleText); // Масштабируем текст при растягивании окна

    AutoScaleText(); // Масштабируем текст после загрузки

    function AutoScaleText() {
        let width = window.innerWidth; // Ширина окна

        if (width > 1280) {
            ChangeTextScale("big");
        } else if (width <= 1280 && width > 720) {
            ChangeTextScale("normal");
        } else if (width < 720) {
            ChangeTextScale("small");
        }
    }
