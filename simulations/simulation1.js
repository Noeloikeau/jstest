// src/simulations/helloSim.js
export default class HelloSimulation {
    constructor() {
        this.container = null;
        this.parameters = {
            showExclamation: {
                value: true,
                type: 'checkbox',
                label: 'Show exclamation mark'
            }
        };
        this.textElement = null;
    }

    async init(container, parametersContainer) {
        console.log('Hello simulation initializing');
        this.container = container;
        
        // Create text element
        this.textElement = document.createElement('div');
        this.textElement.style.cssText = `
            position: fixed;
            bottom: 20%;
            left: 0;
            width: 100%;
            text-align: center;
            color: #0f0;
            font-family: monospace;
            font-size: 20px;
            z-index: 1;
        `;
        this.updateText();
        container.appendChild(this.textElement);

        // Set up parameters if container provided
        if (parametersContainer) {
            const paramsComponent = document.createElement('simulation-parameters');
            parametersContainer.appendChild(paramsComponent);
            paramsComponent.setParameters(this.parameters, (key, value) => {
                this.parameters[key].value = value;
                this.updateText();
            });
        }
    }

    updateText() {
        if (this.textElement) {
            this.textElement.textContent = 'Hello from javascript' + 
                (this.parameters.showExclamation.value ? '!' : '');
        }
    }

    cleanup() {
        if (this.textElement) {
            this.textElement.remove();
        }
    }
}