function Post() {
  return (
    <div className="w-full bg-postBlue space-y-5 py-5">
      <center>
        <p className="text-headerBlack">Recent Post</p>
      </center>
      <center>
        <div className="w-11/12 bg-textWhite px-3 py-2 space-y-3">
            <p className="text-headerBlack font-bold text-lg text-start">Making a design system from scratch</p>
            <div className="flex space-x-4">
                <p className="text-sm text-headerBlack">12 Feb 2020</p>
                <p className="text-sm text-headerBlack">|</p>
                <p className="text-sm text-headerBlack">Design, Pattern</p>
            </div>
            <p className="text-sm text-headerBlack text-start">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br></br>Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>
      </center>
      <center>
          <div className="w-11/12 bg-textWhite px-3 py-2 space-y-3">
              <p className="text-headerBlack font-bold text-lg text-start">Creating pixel perfect icons in Figma</p>
              <div className="flex space-x-4">
                  <p className="text-sm text-headerBlack">12 Feb 2020</p>
                  <p className="text-sm text-headerBlack">|</p>
                  <p className="text-sm text-headerBlack">Design, Pattern</p>
              </div>
              <p className="text-sm text-headerBlack text-start">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br></br>Exercitation veniam consequat sunt nostrud amet.
              </p>
          </div>
        </center>
    </div>
  )
}

export default Post
