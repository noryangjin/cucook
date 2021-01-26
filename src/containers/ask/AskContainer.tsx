import emailjs from 'emailjs-com';
import { useCallback } from 'react';
import Ask from '../../components/ask/Ask';

const AskContainer = () => {
  const sendEmail = useCallback((e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1a8p1r7',
        'template_mqyulqf',
        e.target,
        'user_unGz5eWY4L1nbynljW8RX'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }, []);

  return <Ask sendEmail={sendEmail} />;
};

export default AskContainer;
