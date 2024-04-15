import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AlertModal = ({ newPortfolioUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the modal when the component mounts
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  // styles for the modal

  const Greeting = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: hsl(243, 77.5%, 15.7%);
    font-weight: 700;
  `;
  const Description = styled.p`
    font-size: 1.5rem;
    line-height: 1.8;
    color: hsl(243, 77.5%, 15.7%);
    font-weight: 400;

    margin-bottom: 1rem;
  `;
  const CloseButton = styled.button`
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
  `;
  const Modal = styled.div`
    position: fixed;
    top: 50%;

    left: 50%;
    transform: translate(-50%, -50%);
    background-color: lightgoldenrodyellow;

    padding: 4rem;
    z-index: 1000;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  `;
  const ModalContent = styled.div`
    max-width: 600px;
    margin: 0 auto;
  `;
  const Url = styled.a`
    color: hsl(243, 90.5%, 58.7%);
    text-decoration: underline;
    margin: 1.5rem 0;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    :focus {
      outline: 2px solid hsl(243, 90.5%, 58.7%);
      outline-offset: 2px;
    }
    :hover {
      color: darkgray;
    }
  `;

  return (
    <Modal
      onKeyDown={handleKeyDown}
      onClick={handleClickOutside}
      tabIndex={0}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modalTitle'
      aria-describedby='modalDescription'
    >
      <ModalContent>
        <Greeting id='modalTitle'>HEYY!!</Greeting>
        <Description id='modalDescription'>
          I'm so happy you found your way to my <strong>old portfolio</strong>{' '}
          webbsite! <br />
          Lets take you to my newer portfolio that is actually maintained and
          (most definitely) will provide you a more pleasant user experience{' '}
          <span aria-hidden='true'>😅</span> <br />{' '}
          <Url
            href={newPortfolioUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='External link to my new portfolio'
          >
            Please take me to the new portfolio pronto!
          </Url>
          <br />
          All the best / Annika
        </Description>
        <CloseButton
          onClick={() => setIsOpen(false)}
          style={{ padding: '8px 16px', margin: '10px 0 0' }}
        >
          Close
        </CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
