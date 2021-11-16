import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatForm = ({ input, setInput, sendMessage }) => {
    return (
        <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} autoFocus placeholder="type something..." />
            <button onClick={sendMessage} type="submit" disabled={!input}>
                <FontAwesomeIcon color="white" icon={faPaperPlane} />
            </button>
        </form>
    )
}

export default ChatForm;
