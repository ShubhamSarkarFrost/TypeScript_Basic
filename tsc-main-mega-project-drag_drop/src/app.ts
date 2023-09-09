// Validation
interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?:number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validatableInput: Validatable){
    let isValid = true;
    if(validatableInput.required){
        isValid = isValid &&  validatableInput.value.toString().trim().length !==0;
    }
    if(validatableInput.minLength !==undefined && typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    return isValid;
}




// autobind decorator
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

// ProjectInput Class
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById(
            'project-input'
        )! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector(
            '#title'
        ) as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector(
            '#description'
        ) as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector(
            '#people'
        ) as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDesccription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;
      // if(enteredTitle.trim().length === 0 || enteredDesccription.trim().length === 0 || enteredPeople.trim().length === 0){
        if(
            validate({value:enteredTitle, required:true, minLength: 5}) &&
            validate({value:enteredDesccription, required:true, minLength: 5}) &&
            validate({value: enteredPeople, required: true, minLength: 5})
        ){
          alert("Invalid Input Please Try Again!!")
          return;
      }else{
          return [enteredTitle, enteredDesccription, +enteredPeople]
      }

    }

    private clearInputs(): void {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
       //console.log(this.titleInputElement.value);
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)) {
            const [title, description,people] = userInput;
            console.log(title, description, people)
            this.clearInputs();
        }

    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();
