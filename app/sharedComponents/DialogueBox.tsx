import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DialogueBoxTypes{
     popUp : boolean;
     handleClose : ()=> void;
}

 

const DialogueBox = ({popUp , handleClose} :DialogueBoxTypes ) => {
  return (
    <div>
      {/* ✅ Popup */}
      <Dialog open={popUp}  onOpenChange={handleClose} >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          {/* <div className="space-y-2">
            <p>
              <b>Email:</b> {selectedUser?.email}
            </p>
            <p>
              <b>Phone:</b> {selectedUser?.phone}
            </p>
            <p>
              <b>Website:</b> {selectedUser?.website}
            </p>
            <p>
              <b>Company:</b> {selectedUser?.company}
            </p>
          </div> */}
          <DialogFooter>
            <Button onClick={handleClose}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogueBox;
