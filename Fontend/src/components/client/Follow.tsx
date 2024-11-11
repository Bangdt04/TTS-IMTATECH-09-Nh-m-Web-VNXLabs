import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MdOutlineMail } from "react-icons/md";
import { Post } from "@/types/post";
interface Props {
  open: boolean;
  handleClose: () => void;
  dataFollow: any;
}
const Follow = ({ open, handleClose, dataFollow }: Props) => {
  return (
    <div className="w-[800px]">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="w-full"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-center">
              Danh sách người dùng theo dõi
            </h2>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-3">
            {dataFollow?.follow?.length > 0 ? (
              dataFollow?.follow?.map((follow: any, index: number) => {
                return (
                  <div>
                    <div className="flex items-center gap-4">
                      <div>
                        <img
                          src={follow?.avatar}
                          alt={follow?.name}
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </div>
                      <div>
                        <p>{follow?.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <p>Chưa có người dùng nào theo dõi</p>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Thoát</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Follow;
