// Code goes here!
//autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const OriginalMethod = descriptor.value;
    const adjusteddescriptor: PropertyDescriptor = {
        configurable: true,
        get(){
            const boundFn = OriginalMethod.bind(this);
            return boundFn;
        }
    }
    return adjusteddescriptor;
}



class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;



    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedHTMLContent = document.importNode(this.templateElement.content, true);
        this.element = importedHTMLContent.firstElementChild as HTMLFormElement;
        this.element.id='user-input';
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;



       

        this.Configure();
        this.attach();
     }

     private submitHandler(event:Event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
     }
     
     @autobind
     private Configure(){
       //this.element.addEventListener('submit', this.submitHandler.bind(this));
       this.element.addEventListener('submit', this.submitHandler)
     }


     private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
     }
}

//const prjInput = new ProjectInput();  --------> Code to Instantiate the form 


