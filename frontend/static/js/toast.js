
let index = 0
function removeToast ( toastClass ) {
    setTimeout( () => {
        document.querySelector( "." + toastClass ).remove()
    },500 );
}

export function showToast ( msg,isError = false ) {
    let toastContainer = document.querySelector( ".toast-container" )
    if ( toastContainer )
    {
        let toastClass = "toast" + index
        let errorClass = isError ? " error" : ""
        let progressClass = "progress" + index
        let newToast = '<div class="toast ' + toastClass + errorClass + '">' +
            '<div class="body">' +
            '<p class="msg">' + msg + '</p>' +
            '<button onclick="removeToast(\'' + toastClass + '\')">X</button>' +
            '</div>' +
            '<div class="footer">' +
            '<div class="progress ' + progressClass + '"></div>' +
            '</div>' +
            '</div>'
        toastContainer.innerHTML = newToast
        setTimeout( () => {
            console.log( toastContainer );
            document.querySelector( "." + toastClass ).style.width = "350px"
            document.querySelector( "." + toastClass ).style.visibility = "visible"
            document.querySelector( "." + progressClass ).style.width = "0"
        },100 );
        setTimeout( () => {
            removeToast( toastClass )
        },4000 );
    }
    index++
}
// For the likes and comments buttons

// For the error messages


// For the form submit buttons
document.addEventListener( "DOMContentLoaded",() => {


    document.addEventListener( "click",( event ) => {
        document.querySelectorAll( ".require-connexion" ).forEach( ( elem => {
            elem.addEventListener( "click",( ev ) => {
                showToast( "You are not connected" )
            } )
        } ) )

        document.querySelectorAll( ".submit-form" ).forEach( ( elem => {
            elem.addEventListener( "click",( ev ) => {
                if ( document.activeElement === document.querySelector( ".submit-form.auth-btn" ) )
                {
                    if ( document.querySelector( "input[type='email']" )?.value === "" )
                    {
                        showToast( "Please enter the email",true )
                    } else if ( document.querySelector( "input[type='password']" )?.value === "" )
                    {
                        showToast( "Please enter the password",true )
                    } else if ( document.querySelector( "input[type='password']" )?.value?.length < 6 )
                    {
                        showToast( "The password must be at least 6",true )
                    } else if ( document.querySelector( "input[name='name']" )?.value === "" )
                    {
                        showToast( "Please enter the nickname",true )
                    } else if ( document.querySelector( "input[name='firstname']" )?.value === "" )
                    {
                        showToast( "Please enter the firstname",true )
                    } else if ( document.querySelector( "input[name='lastname']" )?.value === "" )
                    {
                        showToast( "Please enter the lastname",true )
                    } else if ( document.querySelector( "select[name='age']" )?.value === "" )
                    {
                        showToast( "Please enter the age",true )
                    } else if ( document.querySelector( "input[name='gender']" )?.value === "" )
                    {
                        showToast( "Please enter the gender",true )
                    }
                }
                if ( document.querySelector( ".add_post_popup.visible" ) )
                {
                    if ( document.querySelector( "input[name='title']" )?.value === "" )
                    {
                        showToast( "Please enter the title",true )
                    } else if ( document.querySelector( "textarea[name='content']" )?.value === "" )
                    {
                        showToast( "Please enter the content",true )
                    } else if ( document.querySelector( "input[name='categories']" )?.value === "" )
                    {
                        showToast( "Please choose a category",true )
                    }
                }

            } )
        } ) )
    } )
} )
