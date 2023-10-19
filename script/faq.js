//contact modal preventing to close when clicked outside

const contactform = new bootstrap.Modal('#contactmodal', {
  backdrop: 'static',
 
})


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


//Send Inquiries





    var form = document.getElementById('sheetdb-form')

    form.addEventListener('submit', e => {
      e.preventDefault();
       
      fetch(form.action,{

        method: "POST",
        body: new FormData(document.getElementById('sheetdb-form')),

      }).then(

       response => response.JSON

      ).then((html) => {

        

          document.getElementById('emailbox').value = ''
          document.getElementById('messagebox').value = ''
          const alertPlaceholder = document.getElementById('messagesentAlertPlaceholder')
              const appendAlert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                  `<div class="alert alert-${type} alert-dismissible " role="alert" id="messagesentAlertPlaceholder" style="font-size: 12px">`,
                  `   <div>${message}</div>`,
                  '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                  '</div>'
                ].join('');
      
                alertPlaceholder.append(wrapper);
            }
      
            appendAlert('Your inquiry was successfully sent!', 'success');

      });

    });





