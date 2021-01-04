import { useState } from 'react';

const useFormState = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'title':
                setTitle(e.target.value)
                return;
            case 'description':
                setDescription(e.target.value)
                return;
            case 'isImportant':
                setIsImportant(e.target.checked)
                return;
            default:
                console.warn('Wrong input name!')
                return;
        }
    }


    const resetInputs = () => {
        setTitle('');
        setDescription('')
        setIsImportant('')
    }


    return { title, description, isImportant, handleChange, resetInputs }
}

export default useFormState;