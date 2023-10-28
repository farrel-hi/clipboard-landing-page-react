import React from "react";

function DownloadButtons() {
  return(
    <div className="
    flex-column text-white font-semibold text-sm 
    [&>*]:shadow-md
    [&>*]:rounded-full 
    [&>*]:my-2.5
    [&>*]:w-4/5
    [&>*]:h-14
    [&>*]:text-lg
    "
    >
      <button type="button" className="bg-cyan shadow-cyan-500/50 active:bg-cyan-glow">Download for iOS</button>
      <button type="button" className="bg-blue shadow-blue-500/50 active:bg-blue-glow">Download for Mac</button>
    </div>
  );
}

export default DownloadButtons;