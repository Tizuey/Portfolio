import { useState } from "react";
import { useEffect } from "react";

export default function Formulario(){

    const [corpoFormulario, definirCorporFormulario] = useState({
        nomeCompleto: null,
        emailPrincipal: null,
        subjectAssunto: null,
        descricao: null
      });

// ________________________ pegando os valores do formulário e os validando__________________________
    function submeterFormulario(evento){
        const { nome, email, subject, messager } = evento.target.elements

        evento.preventDefault()


//___________ testando para ver se estou pegando os valores_________
      console.log('Os elementos do formulários',
      "Nome: " + nome.value,
      "Email: " + email.value,
      "Assunto: " + subject.value,
      "Texto: " + messager.value,
      
      )
        console.log('onSubmit')

        definirCorporFormulario({
          nomeCompleto: nome.value,
          emailPrincipal: email.value,
          subjectAssunto: subject.value,
          descricao: messager.value 
        })

        const nullName = nome.value == ""
        const nullEmail = email.value == ""
        const nullSubject = subject.value == 'Qual é o assunto'
        const nulldescricao = messager.value == ""
   
       
   
       
       if (!nullName && !nullEmail && !nullSubject && !nulldescricao) {
         alert('OK, já vou lhe retornar, Thanks for the message')
       }
       else if (nullEmail && nullName && nullSubject && nulldescricao) {
        alert('Você está me enviando nada')
      }
       else if (nullEmail) {
         alert('Você deve ser velho para não ter email')
       }
       else if (nullSubject) {
         alert('Me fale qual assunto tu quer fala comigo')
       }
       else if (nulldescricao) {
          alert('Você quer falar comigo, mas não disse nada')
       }
       else if (nullName) {
         alert('È SERIO QUE VOCÊ NÃO TEM NOME')
       }




    }
// __________________ validando os valores do formulário_____________
/*useEffect(
  () => {
    console.log('useEffect')
    
    // aqui é para 

     const {  nomeCompleto,emailPrincipal, subjectAssunto, descricao } = corpoFormulario
     
     const nullName = nome.value == null
     const nullEmail = email.value == null
     const nullSubject = subject.value == null
     const nulldescricao = messager.value == null

    

    
    if (!nullName && !nullEmail && !nullSubject && !nulldescricao) {
      alert('OK, já vou lhe retornar, Thanks for the message')
    }
    else if (nullEmail) {
      alert('Você deve ser velho para não ter email')
    }
    else if (nullSubject) {
      alert('Me fale qual assunto tu quer fala comigo')
    }
    else if (nulldescricao) {
       alert('Você quer falar comigo, mas não disse nada')
    }
    else if (rightForm) {
       alert('OK, já vou lhe retornar, Thanks for the message')
    }
    else if (nullName) {
      alert('È SERIO QUE VOCÊ NÃO TEM NOME')
    }
  },
  [corpoFormulario]
)*/




  
   return( 
   
<>
   
    <form 
    name="contact" className="c-form" 
    onSubmit={(evento) => submeterFormulario(evento)}
    >

    {/*___________NOME___________ */}
    <div className="c-form__group">
      <label htmlFor="name" className="c-form__label" /*</div>required onBlur={}*/>Nome</label>
      <input 
      type="text" 
      placeholder="Digite seu nome" 
      id="nome" 
      className="c-form__control"
      // required
      ></input>
    </div>

    {/*___________EMAIL___________ */}
    <div className="c-form__group">
      <label htmlFor="email" className="c-form__label">E-mail</label>
      <input 
      type="text" 
      placeholder="Digite seu e-mail" 
      id="email" 
      className="c-form__control"
      // required
      ></input>
    </div>




    {/*___________ASSUNTO___________ */}
    <div className="c-form__group">
      <label htmlFor="subject" className="c-form__label">Assunto</label>
      <select id="subject" className="c-form__control"  defaultValue={'Qual é o assunto' }>
        <option value="Qual é o assunto" disabled >Qual é o assunto</option>
        <option value="orcamento">Orçamento</option>
        <option value="oportunidade">Oportunidade</option>
        <option value="parceria">Parcerias</option>
      </select>
    </div>

    {/*___________MENSAGEM___________ */}
    <div className="c-form__group">
      <label htmlFor="messager" className="c-form__label">Mensagem</label>
      <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
    </div>

    {/*___________BOTÃO___________ */}
    <div className="c-form__group">
      <button className="c-btn" type='submit'>Enviar</button>
    </div>
  </form>

  {/*?______________Teste para ver se os inputs foram pegos___________ */}
      {/* <div>
      <p>Nome:   {corpoFormulario.nomeCompleto}</p>
      <p>Email:   {corpoFormulario.emailPrincipal}</p>
      <p>Assunto:   {corpoFormulario.subjectAssunto}</p>
      <p>Texto:   {corpoFormulario.descricao}</p>
    </div> */}
  
    </>  
   
   )
   



}
