function Result(messages, filePath) {
    this.messages = messages
    this.filePath = filePath
}

var result = new Result(JSON.parse(readline()), readline())
var output = ""

const messages = result.messages;


/* if(messages.length) */
output += `<testsuite package="org.eslint" time="0" tests="${messages.length}" errors="${messages.length}" name="${result.filePath}">\n`;

/* if(messages.length) */
output += "</testsuite>\n";


console.log(output)