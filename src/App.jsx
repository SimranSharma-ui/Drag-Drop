import React from 'react'
import GenerateColor from './Componants/GenerateColor';
import GeneratePic from './Componants/GeneratePic';
import DragDrop from './Componants/DragDrop';

const App = () => {
  const intialdata = {
    Todo:["Write Unit test", "intregate payment gateway", "Design Ui mockUps"],
    Progress :["design authentication flow","Set Up project repository","Conduct code reviews"],
    Completed:["Set Up CI/CD pipeline","Deploy initial version to staging","Imleament responsive design"]
  }
  return (
    <div >
  {/* <GenerateColor />
  <GeneratePic/> */}

  <DragDrop intialdata={intialdata}/>
    </div>
  )
}

export default App;
