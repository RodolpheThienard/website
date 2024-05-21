export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="magenta">Opening ' + social + '...</span>';
    switch (social) {
        case 'github':
            window.open('https://github.com/RodolpheThienard');
            break;
        case 'email':
            window.open('mailto:contact@rodolphethienard.fr');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/rodolphe-thienard-b55176159');
            break;
        default:
            output.innerHTML += `\
<span>Write socials [name] to visit it</span>

<span data-color="white">Github: <a href="https://github.com/rodolphethienard">@RodolpheThienard</a></span>
<span data-color="blue">Linkedin: <a href="https://www.linkedin.com/in/rodolphe-thienard-b55176159/">@Rodolphe Thienard</a></span>
<span data-color="yellow">Email: <a href="mailto:contact@rodolphethienard.fr">contact@rodolphethienard.fr</a></span>
`;
        return;
    }
}
