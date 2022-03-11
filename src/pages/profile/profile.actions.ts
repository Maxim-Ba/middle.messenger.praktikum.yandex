export const profileActions = {
  openWindow() {
    this.setProps({
      isOpenWindow: !this.props.isOpenWindow,
      modalWindow: { changeAva: true },
    });
  },
  closeWindow() {
    this.setProps({
      isOpenWindow: !this.props.isOpenWindow,
      modalWindow: { changeAva: false },
    });
  },
  isChangeProfileData() {
    this.setProps({
      disabledInputs: !this.props.disabledInputs,
    });
  },
  makePasswordFormVisible() {
    this.setProps({
      isPasswordFormVisible: true,
    });
  },
  makePasswordFormHidden() {
    this.setProps({
      isPasswordFormVisible: false,
    });
  },
};
