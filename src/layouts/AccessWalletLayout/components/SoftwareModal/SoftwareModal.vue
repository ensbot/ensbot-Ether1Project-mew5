<template>
  <b-modal
    ref="software"
    :title="$t('accessWallet.accessBySoftware')"
    hide-footer
    class="bootstrap-modal nopadding modal-software"
    centered
    static
    lazy
  >
    <div class="warning">
      <warning-message />
    </div>
    <div class="content-block">
      <div class="d-block content-container text-center">
        <div class="button-options">
          <wallet-option
            v-for="(item, idx) in items"
            :key="item.name + idx"
            :selected="selected === item.name"
            :hover-icon="item.imgHoverPath"
            :text="item.text"
            :name="item.name"
            @updateSelected="updateSelected"
          />
        </div>
        <div class="hardware-link">
          <p>
            {{ $t('accessWallet.buyHardwareWallet') }}
          </p>
        </div>
        <input
          ref="jsonInput"
          type="file"
          name="file"
          style="display: none"
          @change="uploadFile"
        />
      </div>
      <div class="button-container-block">
        <standard-button
          :button-disabled="selected !== '' ? false : true"
          :options="continueButtonOptions"
          @click.native="continueAccess"
        />
      </div>
    </div>
  </b-modal>
</template>

<script>
import CustomerSupport from '@/components/CustomerSupport';
import WarningMessage from '@/components/WarningMessage';
import byJsonImgHov from '@/assets/images/icons/button-json-hover.svg';
import byMnemImgHov from '@/assets/images/icons/button-mnemonic-hover.svg';
import privKeyImgHov from '@/assets/images/icons/button-key-hover.svg';
import WalletOption from '../WalletOption';
import StandardButton from '@/components/Buttons/StandardButton';
import { Toast } from '@/helpers';

export default {
  components: {
    'customer-support': CustomerSupport,
    'wallet-option': WalletOption,
    'warning-message': WarningMessage,
    'standard-button': StandardButton
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    openPassword: {
      type: Function,
      default: function() {}
    },
    openMnemonicPhraseInput: {
      type: Function,
      default: function() {}
    },
    openPrivateKeyInput: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      continueButtonOptions: {
        title: this.$t('common.continue'),
        buttonStyle: 'green',
        noMinWidth: true,
        fullWidth: true
      },
      file: '',
      selected: '',
      items: [
        {
          name: 'byJson',
          imgHoverPath: byJsonImgHov,
          text: this.$t('common.jsonF')
        },
        {
          name: 'byMnem',
          imgHoverPath: byMnemImgHov,
          text: this.$t('common.mnemonicP')
        },
        {
          name: 'byPriv',
          imgHoverPath: privKeyImgHov,
          text: this.$t('common.privKey')
        }
      ]
    };
  },
  methods: {
    uploadClick() {
      const jsonInput = this.$refs.jsonInput;
      jsonInput.value = '';
      jsonInput.click();
    },
    continueAccess() {
      if (this.selected === 'byJson') {
        this.uploadClick();
      } else if (this.selected === 'byPriv') {
        this.openPrivateKeyInput();
      } else if (this.selected === 'byMnem') {
        this.openMnemonicPhraseInput();
      }
    },
    updateSelected(ref) {
      if (this.selected !== ref) {
        this.selected = ref;
      } else {
        this.selected = '';
      }
    },
    select(ref) {
      if (this.selected !== ref) {
        this.selected = ref;
      } else {
        this.selected = '';
      }
    },
    uploadFile(e) {
      const self = this;
      const reader = new FileReader();
      reader.onloadend = function(evt) {
        try {
          self.$emit('file', JSON.parse(evt.target.result));
          self.file = JSON.parse(evt.target.result);
        } catch (e) {
          Toast.responseHandler(e, Toast.ERROR);
        }
      };
      reader.readAsBinaryString(e.target.files[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'SoftwareModal-desktop.scss';
@import 'SoftwareModal-tablet.scss';
@import 'SoftwareModal-mobile.scss';
</style>
