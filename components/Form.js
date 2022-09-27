import { useState } from 'react';
import { send } from 'emailjs-com';

function App() {
    const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_5pk77lt',
      'template_o7bj2a7',
      toSend,
      'BhnbkIAJserBsED7N'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex px-1 my-10 text-black bg-gray-600'>
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='name'
                placeholder='Nombre'
                value={toSend.name}
                onChange={handleChange}
            />
            <input
                className="m-4"
                type='text'
                name='surname'
                placeholder='Apellido'
                value={toSend.surname}
                onChange={handleChange}
            />
            <input
                className="m-4"
                type='text'
                name='email'
                placeholder='Email'
                value={toSend.email}
                onChange={handleChange}
            />  
            <input
                type='text'
                name='vehicle'
                placeholder='Vehiculo'
                value={toSend.vehicle}
                onChange={handleChange}
            />
            <input
                className="m-4"
                type='text'
                name='experience'
                placeholder='Experiencia'
                value={toSend.experience}
                onChange={handleChange}
            />  
            <input
                className="m-4"
                type='text'
                name='millage'
                placeholder='Kilometraje'
                value={toSend.millage}
                onChange={handleChange}
            />
            <input
                className="m-4"
                type='text'
                name='message'
                placeholder='Mensaje'
                value={toSend.message}
                onChange={handleChange}
            />
            <button className='m-4 bg-primary' type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default App;