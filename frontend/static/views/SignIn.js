import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor( params ) {
    super( params );
    this.setTitle( "Signin" );

  }


getHtml ( url,vr ) {
    return `
      <div class="auth">
        <div class="cover">
          <img src="/static/img/graphql.png" alt="">
        </div>
        <div class="form-container">
          <div class="form">
            <div class="toast-container"></div>
            <p class="show-toast none"></p>
            <div class="login-form-container">
              <form class="login-form" id="signinForm" data-form="signin">
                <p class="title">Login Now</p>
                <div class="input-container">
                  <input required name="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Your email or your nickname">
                </div>
                <div class="input-container">
                  <input required minlength="6" name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your password">
                </div>
                <div class="btn-container">
                  <button class="btn submit-form auth-btn" type="button" id="loginButton">
                    Login
                  </button>
                </div>
           
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

//   async submitForm ( url ) {
//     const form = document.getElementById( 'signinForm' );
  
//     if ( !form )
//     {
//       alert( "Form not found" );
//       return;
//     }
  
//     try
//     {
//       const formData = new FormData( form );
//       console.log( formData );
//       const formDataObject = {};
//       formData.forEach( ( value,key ) => {
//         formDataObject[ key ] = value;
//       } );
//       // Appel à la fonction fetchJson de AbstractView
//       const data = await this.fetchJson( url,JSON.stringify( formDataObject ) );
//       console.log( "--------->",data )
//       if ( data.success )
//       {
//         // Update the URL and content without refreshing
//         navigateTo( '/home' )
//       } else
//       {
//         // Handle unsuccessful login
//         console.error( 'Login error:',data.message );
//       }
//       // Gérez la réponse du backend ici (par exemple, redirigez l'utilisateur)
//     } catch ( error )
//     {
//       // Gérez les erreurs ici (par exemple, affichez un message d'erreur à l'utilisateur)
//       console.error( 'Login error:',error );
//     }
//   }
  
//   // Attache l'événement de clic au bouton après le rendu de la page
//   async afterRender ( url ) {
//     const loginButton = document.getElementById( 'loginButton' );
//     if ( loginButton )
//     {
//       loginButton.addEventListener( 'click',() => this.submitForm( url ) );
//     }
//   }
// }
