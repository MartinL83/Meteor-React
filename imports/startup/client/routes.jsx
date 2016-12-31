import { FlowRouter } from 'meteor/kadira:flow-router';
import React, { Component } from 'react';
import {mount} from 'react-mounter';

import {Layout, Welcome} from '../../ui/layouts/layout.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Welcome name="Martin"/>)
    });
  }
});
