export default function(output) {
    output.innerHTML += `\
Here Is A List Of Commands:
    <div style="display:grid; grid-template-columns: 1fr .1fr 3fr">
    <span data-color="yellow">help</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Displays This.</span>
    <span data-color="yellow">about</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Who Is This?</span>
    <span data-color="yellow">education</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">My education background</span>
    <span data-color="yellow">experiences</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">My experiences background</span>
    <span data-color="yellow">projects</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">My Github Repos!</span>
    <span data-color="yellow">languages</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">My programming languages</span>
    <span data-color="yellow">socials</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Contact Me Here!</span>
    <span data-color="yellow">gui</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">my resume in PDF format</span>
    </div>
    <span data-color="grey">--------------------------------------------</span>
Extra Commands For Fun:
    <div style="display:grid; grid-template-columns: 1fr .1fr 3fr">
    <span data-color="yellow">quote</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Just Some Random Quotes.</span>
    <span data-color="yellow">source</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Source Code For This Website.</span>
    <span data-color="yellow">clear</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Clears The Terminal.</span>
    <span data-color="yellow">whoami</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">What's Your Name?</span>
    <span data-color="yellow">history</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Prints Your Command History.</span>
    <span data-color="yellow">hostname</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">What Is This?</span>
    <span data-color="yellow">echo [text]</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Prints [text].</span>
    <span data-color="yellow">eval [code]</span> <span data-color="grey" style="text-align=right">-</span> <span data-color="white">Eval [code] As JS.</span>
    </div>
`;
}
