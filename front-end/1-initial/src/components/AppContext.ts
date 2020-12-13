import React from "react"
import { IServiceLocator } from "../services/abstraction"
import { bootstrapServices } from '../services/boostrap';

const serviceLocator: IServiceLocator = bootstrapServices()

export const AppServiceContext = React.createContext(serviceLocator)

export const useAppServiceLocator = () => React.useContext(AppServiceContext)