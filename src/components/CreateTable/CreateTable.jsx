import words from '../../utils/words';
import Table from '../Table/Table';

function CreateTable() {
  return (
    <div className="container">
        {words.map((word, i) => (
          <Table
          key={i}
            id={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            isSelected={word.isSelected}
          ></Table>
        ))}
      </div>
  );
}

export default CreateTable;
