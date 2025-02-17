import { useState, lazy, Suspense} from 'react';
import { ArrowFunction } from '../ArrowFunction';
import ClassDefault from '../ClassDefault';
import { ClassNamed } from '../ClassNamed';
import FunctionDefault from '../FunctionDefault';
import { FunctionNamed } from '../FunctionNamed';

const LazyComponent = lazy(() => import('../LazyComponent'));

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleModal = () => setIsOpen(!isOpen);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { text: newMessage, time: new Date().toLocaleTimeString() },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-modal">
      <button
        onClick={toggleModal}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Chat Support
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '10px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h3 style={{ margin: 0 }}>Chat Support</h3>
            <button
              onClick={toggleModal}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '10px',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  backgroundColor: '#f8f9fa',
                  padding: '8px',
                  borderRadius: '5px',
                }}
              >
                <div>{msg.text}</div>
                <small style={{ color: '#666' }}>{msg.time}</small>
              </div>
            ))}
          </div>

          <div>
            <ClassDefault />
            <ClassNamed />
            <FunctionDefault />
            <FunctionNamed />
            <ArrowFunction />
            <Suspense fallback={<h1>Loading</h1>}>
              <LazyComponent />
            </Suspense>
          </div>

          <form
            onSubmit={sendMessage}
            style={{
              borderTop: '1px solid #eee',
              padding: '10px',
              display: 'flex',
            }}
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: '8px',
                marginRight: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
