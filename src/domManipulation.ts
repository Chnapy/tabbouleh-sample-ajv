import {ErrorObject} from "ajv";


const schemaOutput = document.getElementById('schema-output') as HTMLPreElement;
const dataInput = document.getElementById('data-input') as HTMLTextAreaElement;
const stateOutput = document.getElementById('state-output') as HTMLDivElement;

function onSuccess() {
    stateOutput.classList.remove('error');
    stateOutput.classList.add('success');

    stateOutput.innerHTML = '';
}

function onError(errors: Pick<ErrorObject, 'dataPath' | 'message'>[]) {
    stateOutput.classList.remove('success');
    stateOutput.classList.add('error');

    stateOutput.innerHTML = '<br/><br/>' + errors.map(e => e.dataPath + ' => ' + e.message).join('<br/>');
}

function onChange(value: string, doValidate: (data: object) => { valid: boolean; errors: ErrorObject[] }): void {

    try {
        const result = doValidate(JSON.parse(value));

        console.log('validate result:', result);

        if (result.valid) {
            onSuccess();
        } else {
            onError(result.errors);
        }
    } catch (e) {
        console.error(e);
        onError([{
            dataPath: e.name,
            message: e.message
        }]);
    }
}

export function DOMInit(schema: object, defaultData: object, doValidate: (data: object) => { valid: boolean; errors: ErrorObject[] }) {

    schemaOutput.innerText = JSON.stringify(schema, undefined, '\t');

    dataInput.onkeyup = e => {
        const {value} = e.currentTarget as HTMLTextAreaElement;

        onChange(value, doValidate);
    };

    dataInput.value = JSON.stringify(defaultData, undefined, '\t');

    onChange(dataInput.value, doValidate);
}
