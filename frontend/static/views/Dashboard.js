import AbstractView from "./AbstractView.js";



export default class extends AbstractView {
  constructor( params ) {
    super( params );
    this.setTitle( "Dashboard" );
  }



  getHtml ( homeDa,vr ) {

    
      return `
      <div id="content" class="col-12 container m-3 d-none" style="background-color: black;">
      <div class="row">                
          <div class="col-1">
              <a class="btn signout blink"  href="/signout" data-link><i class="icon signout-icon"></i>Disconnect</a>
          </div>
        </div>
      </div>          
      <div id="user-info">
                
                <table>
                    <tr>
                      <th>LOGIN</th>
                      <th>ID</th>
                      <th>TOTAL XP</th>
                      <th>LEVEL</th>
                    </tr>
                    <tr>
                      <th id="login"></th>
                      <th id="id"></th>
                      <th id="total-xp"></th>
                      <th id="level"></th>

                    </tr>
                  </table>
      </div>
      <div class="xp">
      <svg id="xp" width="800" height="400" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
    <div class="ratio">
      <svg id="ratio" width="400" height="400" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
      `;
    
   
  }
}