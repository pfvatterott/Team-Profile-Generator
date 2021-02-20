function createHTML(employeeList) {

    let firstHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>My Team</title>
        <!-- Material Icon CDN -->
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Materialize CSS CDN -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <!-- Your custom styles -->
          <link rel="stylesheet" href="./style.css">
        <!-- Used as an example only to position the footer at the end of the page.
        You can delete these styles or move it to your custom css file -->
        <style>
          body {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
            }
          main {
            flex: 1 0 auto;
          }
        </style>
      </head>
      <body>
        <header>
          <nav class="cyan">
            <div class="nav-wrapper">
              <div class="container">
                <a href="#" class="brand-logo">My Team</a>
              </div>
            </div>
          </nav>
        </header>
    
        <main>
          <section class="section white">
            <div class="row container" id="cardWrapper">
              <div class="col s12 m6" id="employeeCard">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">${employeeList[0].getName()}</span>
                    <h5>Manager</h5>
                    <div class="collection">
                      <a href="#!" class="collection-item">ID: ${employeeList[0].getId()}</a>
                      <a href="mailto:${employeeList[0].getEmail()}" target="_blank" class="collection-item">Email: ${employeeList[0].getEmail()}</a>
                      <a href="#!" class="collection-item">Office Number: ${employeeList[0].getOfficeNumber()}</a>
                    </div>
                  </div>
                </div>
              </div>`;
    
    let lastHTML = `
            </div>
            </section>
        </main>

        <!-- jQuery CDN -->
            <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <!-- Materialize JS CDN -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        <script>
            $("document").ready(function(){
            $(".button-collapse").sideNav();
            });
        </script>
        </body>
        </html>`;


    let newCards = [];
    for (let i = 1; i < employeeList.length; i++) {
        if (employeeList[i].getRole() === "Intern") {
            newCards += `
            <div class="col s12 m6" id="employeeCard">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${employeeList[i].getName()}</span>
                <h5>${employeeList[i].getRole()}</h5>
                <div class="collection">
                  <a href="#!" class="collection-item">ID: ${employeeList[i].getId()}</a>
                  <a href="mailto:${employeeList[i].getEmail()}" target="_blank" class="collection-item">Email: ${employeeList[i].getEmail()}</a>
                  <a href="#!" class="collection-item">School: ${employeeList[i].getSchool()}</a>
                </div>
              </div>
            </div>
          </div>`;
        }
        else if (employeeList[i].getRole() === "Engineer") {
            newCards += `
            <div class="col s12 m6" id="employeeCard">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${employeeList[i].getName()}</span>
                <h5>${employeeList[i].getRole()}</h5>
                <div class="collection">
                  <a href="#!" class="collection-item">ID: ${employeeList[i].getId()}</a>
                  <a href="mailto:${employeeList[i].getEmail()}" target="_blank" class="collection-item">Email: ${employeeList[i].getEmail()}</a>
                  <a href="https://github.com/${employeeList[i].getGithub()}" target="_blank" class="collection-item">Github: ${employeeList[i].getGithub()}</a>
                </div>
              </div>
            </div>
          </div>`;
        }
        
    }

    return (firstHTML + newCards + lastHTML)

}

module.exports = createHTML;