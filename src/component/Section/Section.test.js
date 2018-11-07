import React from 'react'
import Section from './index'
import { ExpansionPanelActions } from '@material-ui/core';

describe('Section component test', () => {
    it('render succesfully',() => {
        const sectionComponent = shallow(<Section />)
        Expect(sectionComponent.find(''))
    })
})